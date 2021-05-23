/* REACT */
import { StyleSheet } from "react-native";
import { COLORS } from "src/theme";
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from "src/utils/layout";

export default StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: getHeightWithScaleFactor(20),
    backgroundColor: "red",
    marginVertical: getHeightWithScaleFactor(10),
    marginHorizontal: getWidthWithScaleFactor(10),
  },
  container: {
    borderRadius: getHeightWithScaleFactor(20),
    padding: getHeightWithScaleFactor(10),
  },
  tooltipLabel: {
    color: COLORS.WHITE,
  },
  trashCanBlock: {
    marginRight: getHeightWithScaleFactor(7),
    justifyContent: "center",
  },
});
