import React from "react";
import { Image, View, ImageSourcePropType, ImageStyle } from "react-native";
import styles from "./styles";

/* CUSTOM MODULES */
import { Icons } from "src/components";

type TState = {
  isError: boolean
}
type TProps = {
  source: ImageSourcePropType,
  style: ImageStyle,
}

class ImageLoad extends React.Component<TProps, TState> {
  constructor(props: TProps) {
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
