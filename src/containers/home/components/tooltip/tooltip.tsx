/* REACT */
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import tinycolor from "tinycolor2";

/* CUSTOM MODULES */
import { Icons } from "src/components";

/* STYLES */
import styles from "./styles";
import { COLORS } from "src/theme";

export interface Props {
  item: string;
  index: number;
  selectedTooltipIndex: number | null;
  onPress: (param: number) => void;
  onRemovePress: (param: number) => void;
}

// TODO(mikle): move to utils
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default (props: Props): JSX.Element => {
  const { item, index, selectedTooltipIndex, onPress, onRemovePress } = props;

  const [selected, setSelected] = useState(false);
  const [randomColor] = useState(getRandomColor());

  // one tooltip can be selected atm
  useEffect(() => {
    setSelected(false);
  }, [selectedTooltipIndex]);

  const isItemSelected = index === selectedTooltipIndex;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!isItemSelected) {
          onPress(index);
        } else {
          //switch from previous mode
          setSelected(!selected);
        }
      }}>
      <View
        style={[
          styles.row,
          { backgroundColor: tinycolor(randomColor).darken(25).toString() },
        ]}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: isItemSelected ? randomColor : COLORS.MANATEE,
            },
          ]}>
          <Text style={styles.tooltipLabel}>{item}</Text>
        </View>
        {selected && (
          <TouchableWithoutFeedback
            style={styles.trashCanBlock}
            onPress={() => {
              onRemovePress(index);
            }}>
            <Icons
              type="material"
              name="delete"
              size={17}
              color={COLORS.WHITE}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
