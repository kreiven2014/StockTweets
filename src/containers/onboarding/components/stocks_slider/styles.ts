/* REACT */
import { StyleSheet } from "react-native";

import { COLORS } from "src/theme";

/* CUSTOM MODULES */
import {
  getWidthWithScaleFactor,
  getHeightWithScaleFactor,
} from "src/utils/layout";

export default StyleSheet.create({
  stocksContainer: {
    flexDirection: "row",
    // flex: 1,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: getWidthWithScaleFactor(50),
  },
  singleSlide: {
    width: getWidthWithScaleFactor(10),
    height: getHeightWithScaleFactor(140),
    borderRadius: getWidthWithScaleFactor(10 / 2),
    backgroundColor: COLORS.SALOMIE,
    justifyContent: "flex-end",
  },
  innerSingleSlide: {
    backgroundColor: COLORS.CARRIBEAN_GREEN,
    borderRadius: getWidthWithScaleFactor(10 / 2),
  },
});
