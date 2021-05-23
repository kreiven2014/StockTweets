/* REACT */
import React, { PureComponent } from "react";
import { TextInput, View } from "react-native";

import { Translation } from "react-i18next";

/* CUSTOM MODULES */
import BaseText from "src/components/base_text/base_text";
import { COLORS } from "src/theme";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { IStylesType, TTranslate } from "src/types";

export interface Props {
  autoCapitalize?: "none" | "characters" | "sentences" | "words";
  label?: string;
  placeholder: string;
  hasError?: boolean;
  keyboardType?: "numeric" | "email-address";
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  style?: IStylesType["textStyle"];
  labelStyle?: IStylesType["textStyle"];
  value: string;
  refProp?: React.RefObject<TextInput>;
  errorMessage?: string;
  returnKeyType?: "go" | "next" | "search" | "send" | "done";
  // FUNCTIONS
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;
  onChangeText: (value: string) => void;
}

export default class extends PureComponent<Props> {
  render(): JSX.Element {
    const {
      label,
      hasError,
      style,
      labelStyle,
      errorMessage,
      refProp,
      placeholder,
      ...restProps
    } = this.props;

    const inputColor =
      errorMessage && errorMessage.length
        ? COLORS.ERROR
        : COLORS.INPUT.TEXT_COLOR;
    const borderColor =
      errorMessage && errorMessage.length
        ? COLORS.ERROR
        : COLORS.INPUT.BORDER_COLOR;

    return (
      <View style={styles.container}>
        <Translation>
          {(t: TTranslate) => (
            <TextInput
              ref={refProp}
              allowFontScaling={false}
              underlineColorAndroid="transparent"
              style={[
                styles.input,
                style,
                hasError && styles.inputWithError,
                {
                  borderColor,
                },
              ]}
              {...restProps}
              placeholder={t(placeholder)}
            />
          )}
        </Translation>
        {!!label && (
          <View style={styles.labelsWrapper}>
            <BaseText
              style={[
                styles.labelText,
                labelStyle,
                {
                  color: inputColor,
                },
              ]}
              textKey={label}
            />
            <View />
          </View>
        )}
        {!!errorMessage && (
          <BaseText
            style={[
              styles.labelText,
              labelStyle,
              styles.error,
              {
                color: inputColor,
              },
            ]}
            textKey={errorMessage}
          />
        )}
      </View>
    );
  }
}
