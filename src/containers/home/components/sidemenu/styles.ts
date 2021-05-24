/* REACT */
import { StyleSheet } from "react-native";

/* MODULES */
import { getStatusBarHeight } from 'react-native-status-bar-height';

import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from "src/utils/layout";
import { COLORS } from "src/theme";

export default StyleSheet.create({
  modalView: {
    backgroundColor: COLORS.BLUEBERRY,
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalText: {
    marginBottom: getHeightWithScaleFactor(20),
    textAlign: "center",
    color: COLORS.WHITE,
    fontSize: 19
  },
  modalHeader: {
    marginTop: getStatusBarHeight(true),
    height: getHeightWithScaleFactor(50),
    alignItems: "center",
    flexDirection: "row",
  },
  closeIconBlock: {
    paddingRight: getWidthWithScaleFactor(5),
    paddingLeft: getWidthWithScaleFactor(5),
    justifyContent: "center"
  }
});
