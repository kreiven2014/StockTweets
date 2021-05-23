/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
} from "src/utils/layout";

export default StyleSheet.create({
  mainPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {},
  buttonWrapper: {
    width: "100%",
  },
  slide1: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  slide2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  sliderTitle: {
    fontSize: getFontWithScaleFactor(24),
    fontWeight: "500",
    marginBottom: getHeightWithScaleFactor(40),
  },
});
