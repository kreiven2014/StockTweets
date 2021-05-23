/* REACT */
import React from "react";
import { Text } from "react-native";

/* MODULES */
import { Translation } from "react-i18next";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { IStylesType, TTranslate } from "src/types";

export interface Props {
  children?: string;
  textKey?: string;
  style?: IStylesType["textStyle"];
  isTitle?: boolean;
  numberOfLines?: number;
}

export default (props: Props): JSX.Element => {
  const { style, children, isTitle, textKey, ...restProps } = props;

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={1}
      ellipsizeMode="tail"
      {...restProps}
      style={[
        styles.text,
        isTitle && styles.title,
        ...(Array.isArray(style) ? style : [style]),
      ]}>
      {textKey ? (
        <Translation>{(t: TTranslate) => t(textKey)}</Translation>
      ) : (
        children
      )}
    </Text>
  );
};
