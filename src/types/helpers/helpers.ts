/* TYPES */

import type { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";

export type _t_envType = "dev" | "stage" | "prod";

export type TTranslate = (keys: string | string[]) => string;

export type TOrientation = "PORTRAIT" | "LANDSCAPE";

export interface IStylesType {
  viewStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  imageStyle: StyleProp<ImageStyle>;
}

export interface IImagePickerFile {
  type: string;
  name: string;
  size: number;
  uri: string;
  path: string;
}
