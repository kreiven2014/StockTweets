import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

/* CUSTOM MODULES */
import { Icons } from "src/components";

// type TState {
//   state: boolean
// }

class ImageLoad extends React.Component<TProps, TState> {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  onError() {
    this.setState({
      isError: true,
    });
  }

  render() {
    const { source, style } = this.props;
    if (!this.state.isError) {
      return (
        <Image
          style={[style, styles.userImage]}
          source={source}
          onError={this.onError.bind(this)}
        />
      );
    }
    return (
      <View style={[style, styles.defaultIconBlock]}>
        <Icons type="material" name="person" size={25} color="white" />
      </View>
    );
  }
}

export default ImageLoad;
