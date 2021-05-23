/* REACT */
import React, { PureComponent } from "react";
import {
  Keyboard,
  UIManager,
  Animated,
  TextInput,
  EmitterSubscription,
} from "react-native";

// $FlowFixMe
const { State: TextInputState } = TextInput;

/* CUSTOM MODULES */
import SIZES from "src/theme/sizes";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { IStylesType } from "src/types";

export interface Props {
  children: React.ReactNode;
  style?: IStylesType["viewStyle"];
}

export default class extends PureComponent<Props> {
  shift = new Animated.Value(0);

  keyboardDidShowSub: EmitterSubscription | null = null;

  keyboardDidHideSub: EmitterSubscription | null = null;

  componentDidMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this.handleKeyboardDidShow,
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this.handleKeyboardDidHide,
    );
  }

  componentWillUnmount() {
    if (this.keyboardDidShowSub) {
      this.keyboardDidShowSub.remove();
    }
    if (this.keyboardDidHideSub) {
      this.keyboardDidHideSub.remove();
    }
  }

  handleKeyboardDidShow = (event: { endCoordinates: { height: number } }) => {
    const keyboardHeight = event?.endCoordinates?.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    if (currentlyFocusedField) {
      UIManager.measure(
        currentlyFocusedField,
        (originX, originY, width, height, pageX, pageY) => {
          const fieldHeight = height;
          const fieldTop = pageY;
          const gap = SIZES.HEIGHT - keyboardHeight - (fieldTop + fieldHeight);
          if (gap >= 0) {
            return;
          }
          Animated.timing(this.shift, {
            // TODO(everybody): Check it with fluent menu android.
            toValue: gap - SIZES.PADDING_BOTTOM_INPUT,
            duration: 50,
            useNativeDriver: true,
          }).start();
        },
      );
    }
  };

  handleKeyboardDidHide = () => {
    Animated.timing(this.shift, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  // ==================
  // ===== RENDER =====
  // ==================

  render(): JSX.Element {
    const { children, style } = this.props;
    return (
      <Animated.View
        style={[
          styles.content,
          style,
          {
            transform: [
              {
                translateY: this.shift,
              },
            ],
          },
        ]}>
        {children}
      </Animated.View>
    );
  }
}
