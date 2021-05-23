/* REACT */
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

/* CUSTOM MODULES */
import BaseText from "src/components/base_text/base_text";

/* CONFIGS */
import CONFIG from "src/configs/main_config";

/* STYLES */
import styles from "./styles";

/* TYPES */

interface Props { }

interface State {
  visible: boolean;
}

export default class extends Component<Props, State> {
  state = {
    visible: true,
  };

  // ==================
  // ===== RENDER =====
  // ==================

  render(): JSX.Element | null {
    if (!this.state.visible) {
      return null;
    }

    return ["dev", "stage"].includes(CONFIG.ENV) ? (
      <TouchableOpacity
        testID="headerRightTape"
        style={styles.tape}
        onLongPress={() =>
          this.setState(() => ({
            visible: false,
          }))
        }>
        <BaseText style={styles.title} numberOfLines={2}>
          {`${CONFIG.ENV}\n29.11.19 16-30`}
        </BaseText>
      </TouchableOpacity>
    ) : null;
  }
}
