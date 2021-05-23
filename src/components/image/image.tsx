/* REACT */
import React from "react";

/* MODULES */
import FastImage from "react-native-fast-image";

/* TYPES */

export interface Props {
  width: number;
  height: number;
  uri: string | number;
  resizeMode?: "contain" | "cover" | "stretch" | "center";
  borderRadius?: number;
}

export default (props: Props): JSX.Element => {
  const { width, height, borderRadius, uri, resizeMode } = props;

  return (
    <FastImage
      style={{
        height,
        width,
        borderRadius,
      }}
      source={
        typeof uri === "string"
          ? {
            uri,
          }
          : uri
      }
      resizeMode={resizeMode || FastImage.resizeMode.contain}
    />
  );
};
