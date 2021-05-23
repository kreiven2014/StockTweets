/* REACT */
import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

/* MODULES */
import { ifIphoneX } from "react-native-iphone-x-helper";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { IStylesType } from "src/types";

export interface Props {
  style?: IStylesType["viewStyle"];
  children?: React.ReactNode;
  enabled?: boolean;
}

const Wrapper: typeof View | typeof KeyboardAvoidingView = Platform.select({
  ios: KeyboardAvoidingView,
  // @ts-expect-error
  android: View,
});

const keyboardVerticalOffset = {
  keyboardVerticalOffset: ifIphoneX(35, 10),
};

export default (props: Props) => {
  const { enabled = true } = props;

  return (
    <Wrapper
      {...keyboardVerticalOffset}
      style={[styles.container, props.style]}
      behavior="padding"
      enabled={enabled}>
      {props.children}
    </Wrapper>
  );
};
