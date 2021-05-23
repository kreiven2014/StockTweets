/* REACT */
import { StyleSheet, Platform } from "react-native";
import { COLORS } from "src/theme";
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
  getFontWithScaleFactor,
} from "src/utils/layout";

export default StyleSheet.create({
  container: {
    borderRadius: getHeightWithScaleFactor(2),
    flexDirection: "column",
    backgroundColor: "white",
    padding: getHeightWithScaleFactor(10),
    marginBottom: getHeightWithScaleFactor(10),
    marginHorizontal: getWidthWithScaleFactor(10),
    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: COLORS.BLACK,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 2,
      },
    }),
  },
  avatarImage: {
    marginBottom: getHeightWithScaleFactor(7),
    height: getHeightWithScaleFactor(30),
    width: getHeightWithScaleFactor(30),
    borderRadius: getHeightWithScaleFactor(30 / 2),
  },
  avatarName: {
    color: COLORS.DENIM,
    marginBottom: getHeightWithScaleFactor(5),
    fontSize: getFontWithScaleFactor(13),
  },
});
