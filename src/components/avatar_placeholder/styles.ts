/* REACT */
import { StyleSheet } from "react-native";
import { getHeightWithScaleFactor } from "src/utils/layout";
import { COLORS } from "src/theme";

export default StyleSheet.create({
  defaultIconBlock: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.SILVER_CHALICE,
  },
  userImage: {
    height: getHeightWithScaleFactor(20),
    width: getHeightWithScaleFactor(20),
    borderRadius: getHeightWithScaleFactor(20),
  },
});
