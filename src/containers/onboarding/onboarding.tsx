/* REACT */
import React, { PureComponent } from "react";
import { View, Text } from "react-native";

/* MODULES */
import Swiper from "react-native-swiper";

/* CUSTOM MODULES */
import { Icons } from "src/components";
import StockSlider from "./components/stocks_slider/stocks_slider";

/* STYLES */
import styles from "./styles";

const LAST_SLIDER_INDEX = 1;
const SWIPER_TIMEOUT = 1.5;

/* TYPES */
import { COLORS } from "src/theme";
import { TNavigation } from "src/types";

interface IDefaultProps {
  navigation: TNavigation;
}

interface Props extends IDefaultProps { }

export default class extends PureComponent<Props> {
  static defaultProps: IDefaultProps;

  /**
   * Go to main page
   */

  goToMainPage = (index: number) => {
    if (index === LAST_SLIDER_INDEX) {
      const { navigation } = this.props;
      if (navigation) {
        setTimeout(() => {
          navigation.navigate({
            name: "Home",
            key: "Home",
          });
          //wait some time for user to see last swipe slider
        }, SWIPER_TIMEOUT * 1000);
      }
    }
  };

  // ==================
  // ===== RENDER =====
  // ==================

  render(): JSX.Element {
    return (
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        scrollEnabled={false}
        loop={false}
        autoplay
        autoplayTimeout={SWIPER_TIMEOUT}
        //METHODS
        onIndexChanged={this.goToMainPage}>
        <View style={styles.slide1}>
          <Text style={styles.sliderTitle}>Find Stock Symbols</Text>
          <StockSlider />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.sliderTitle}>Get What People Think</Text>
          <Icons
            type="material"
            name="chat"
            size={200}
            color={COLORS.CARRIBEAN_GREEN}
          />
        </View>
      </Swiper>
    );
  }
}
