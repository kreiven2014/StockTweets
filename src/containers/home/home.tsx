/* REACT */
import React, { Component } from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
  View,
  RefreshControl,
  Text,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

/* MODULES */
// import { getSymbols } from "src/utils/requests";

import axios from "axios";

/* CUSTOM MODULES */
import { HeaderTitle, Icons } from "src/components";

import Tweet from "./components/tweet/tweet";
import Tooltip from "./components/tooltip/tooltip";

/* STYLES */
import styles from "./styles";

/* TYPES */
import { TNavigation } from "src/types";

interface IDefaultProps {
  navigation: TNavigation;
}

interface Props extends IDefaultProps { }

export interface State {
  searchField: string;
  searchResults: Array<string>;
  selectedResultIndex: null | number;
  refreshing: boolean;
  symbols: Array<Object>;
  tweets: Array<Object>;
  query: string;
}

const PROXY = "https://pacific-taiga-61753.herokuapp.com";

export default class extends Component<Props, State> {
  static defaultProps: IDefaultProps;

  static navigationOptions = () => ({
    headerTitle: <HeaderTitle textKey="sign_up:title" />,
  });

  state = {
    searchField: "",
    searchResults: ["AAP", "AAPL", "AAPC"],
    // searchResults: [],
    selectedResultIndex: null, // null | number
    refreshing: false,
    tweets: [],
    symbols: [],
    query: "",
  };

  timeout: any = null; // TODO(mikle): find timeout type

  doSearch = (searchText: string) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState(() => ({
      query: searchText,
    }));
    this.timeout = setTimeout(() => {
      //search function
      if (searchText.length >= 2) {
        this.searchSymbols(searchText);
      }
    }, 300);
  };

  getInitialList = async (title: string) => {
    try {
      const response = await axios.post(`${PROXY}/tweets`, { title });
      this.setState(() => ({
        tweets: response.data.messages,
      }));
    } catch (error) {
      this.setState(() => ({
        tweets: [],
      }));
      // console.log("error", error);
    }
  };

  searchSymbols = async (title: string) => {
    try {
      const response = await axios.post(`${PROXY}/search-symbols`, { title });
      this.setState(() => ({
        symbols: response.data.results,
      }));
    } catch (error) {
      // console.log("error", error);
    }
  };

  componentDidMount() {
    // this.getInitialList("AAPL");
  }

  /**
   * Go to page
   *
   * @route {string} - route to navigate to
   */
  goToPage = (name: string, params?: { screen: string; initial?: boolean }) => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate({
        name,
        params,
      });
    }
  };

  /**
   * Go back handler
   */
  goBack = (): void => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.goBack();
    }
  };

  /**
   * Open drawer handler
   */
  openDrawer = (): void => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.openDrawer();
    }
  };

  keyExtractor = (item: any, index: number): string => index.toString(); // TODO(mikle): fix any

  setSelectedTooltipIndex = (index: number) => {
    if (this.state.selectedResultIndex !== index) {
      this.setState(
        () => ({
          selectedResultIndex: index,
        }),
        () => {
          this.getInitialList(this.state.searchResults[index]);
        },
      );
    }
  };

  findUniqueSearches = (searchResults: Array<string>, symbol: string) => {
    if (searchResults.indexOf(symbol) > -1) {
      return [...searchResults];
    }
    return [...searchResults, symbol];
  };

  selectSymbol = (symbol: string) => {
    this.setState(
      ({ searchResults }) => ({
        query: "",
        symbols: [],
        // check if symbol already exists in searches
        searchResults: this.findUniqueSearches(searchResults, symbol),
        selectedResultIndex:
          searchResults.indexOf(symbol) > -1
            ? searchResults.indexOf(symbol)
            : searchResults.length,
      }),
      () => {
        this.getInitialList(symbol);
      },
    );
  };

  onRemoveTooltipPress = (indexToRemove: number) => {
    this.setState(
      ({ searchResults, selectedResultIndex }) => ({
        searchResults: searchResults.filter((_, i) => i !== indexToRemove),
        selectedResultIndex: selectedResultIndex
          ? selectedResultIndex - 1
          : null,
      }),
      () => {
        if (this.state.selectedResultIndex !== null) {
          this.getInitialList(
            this.state.searchResults[this.state.selectedResultIndex],
          );
        } else {
          // remove all tweets if not tags saved
          this.setState(() => ({ tweets: [] }));
        }
      },
    );
  };

  _handleRefresh = async () => {
    const { searchResults, selectedResultIndex } = this.state;
    this.setState(() => ({ refreshing: true }));
    try {
      if (selectedResultIndex) {
        await this.getInitialList(searchResults[selectedResultIndex]);
      }
    } finally {
      this.setState(() => ({ refreshing: false }));
    }
  };

  // ==================
  // ===== RENDER =====
  // ==================

  render(): JSX.Element {
    const { query, refreshing, selectedResultIndex } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchField}>
          <TouchableWithoutFeedback onPress={this.openDrawer}>
            <View style={styles.searchIcon}>
              <Icons type="material" name="menu" size={22} color={"grey"} />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.searchBlock}>
            <View style={styles.searchIcon}>
              <Icons type="material" name="search" size={22} color={"grey"} />
            </View>
            <TextInput
              editable
              value={query}
              placeholder="Search symbols or companies"
              maxLength={40}
              onChangeText={this.doSearch}
            />
          </View>
        </View>
        {this.state.symbols?.length > 0 ? (
          <View>
            <FlatList
              data={this.state.symbols}
              keyExtractor={this.keyExtractor}
              maxToRenderPerBatch={1}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.symbolRow}
                  onPress={() => {
                    this.selectSymbol(item.symbol);
                  }}>
                  <Text style={styles.symbol}>{item.symbol}</Text>
                  <Text style={styles.symbolTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : (
          <View style={styles.horizontalTooltipsBlock}>
            <FlatList
              data={this.state.searchResults}
              horizontal
              keyExtractor={this.keyExtractor}
              renderItem={(item) => (
                <Tooltip
                  {...item}
                  onPress={this.setSelectedTooltipIndex}
                  onRemovePress={this.onRemoveTooltipPress}
                  selectedTooltipIndex={selectedResultIndex}
                />
              )}
            />
          </View>
        )}
        {!!this.state.tweets?.length && (
          <Text>Total Amount of Tweets: {this.state.tweets.length}</Text>
        )}
        <FlatList
          data={this.state.tweets}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => <Tweet {...item.item} />}
          keyExtractor={this.keyExtractor}
          // refreshing={refreshing}
          // onRefresh={this._handleRefresh}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._handleRefresh}
              tintColor="black"
              colors={["red", "green"]}
            />
          }
        />
      </View>
    );
  }
}
