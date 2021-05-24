/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import { COLORS } from "src/theme";

import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from "src/utils/layout";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchField: {
    flexDirection: "row",
    borderColor: COLORS.ATHENS_GRAY,
    borderWidth: 1,
    height: getHeightWithScaleFactor(50),
    alignItems: "center",
  },
  searchBlock: {
    borderLeftColor: COLORS.ATHENS_GRAY,
    borderLeftWidth: 1,
    flexDirection: "row",
  },
  searchIcon: {
    paddingRight: getWidthWithScaleFactor(5),
    paddingLeft: getWidthWithScaleFactor(5),
    justifyContent: "center"
  },
  horizontalTooltipsBlock: {
    flexDirection: "row",
  },
  symbolRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: getWidthWithScaleFactor(40),
    marginBottom: getHeightWithScaleFactor(10),
    width: "100%",
  },
  symbol: {
    marginRight: getWidthWithScaleFactor(12),
    textTransform: "uppercase",
    minWidth: getWidthWithScaleFactor(50),
  },
  symbolTitle: {
    maxWidth: "60%",
  },
  tolalAmount: {
    marginLeft: getWidthWithScaleFactor(12),
  },
});
