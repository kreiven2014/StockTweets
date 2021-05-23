/* REACT */
import React from "react";
import { View } from "react-native";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { IStylesType } from "src/types";

export interface Props {
  children?: React.ReactNode;
  style?: IStylesType["viewStyle"];
}

export default (props: Props): JSX.Element => {
  const { children, style, ...restProps } = props;

  return (
    <View style={[styles.row, style]} {...restProps}>
      {children}
    </View>
  );
};
