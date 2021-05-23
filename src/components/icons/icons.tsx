/* MODULES */
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { createIconSet } from "react-native-vector-icons";

/* CUSTOM MODULES */
import { getFontWithScaleFactor } from "src/utils/layout";

/* TYPES */
export interface Props {
  name: string;
  type?: "svgIcon" | "material";
  size: number;
  color: string;
}

const svgIcon = createIconSet(
  {
    credit_cart: 59648,
  },
  "icomoon",
  "icomoon.ttf",
);

const IconTypes = {
  svgIcon,
  material: MaterialIcon,
};

export default (props: Props): JSX.Element => {
  const { type, size, ...restProps } = props;
  const IconDynamic = IconTypes[type || "svgIcon"];
  return (
    // fix: name = element because an index signature declaring the expected key / value
    // $FlowFixMe
    <IconDynamic size={getFontWithScaleFactor(size)} {...restProps} />
  );
};
