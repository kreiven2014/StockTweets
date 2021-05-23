/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import { getFontWithScaleFactor } from "src/utils/layout";
import { COLORS } from "src/theme";

export default StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: getFontWithScaleFactor(24),
    lineHeight: getFontWithScaleFactor(32),
    color: COLORS.HEADER.TEXT,
  },
});
