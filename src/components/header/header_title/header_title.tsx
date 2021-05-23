/* REACT */
import React from "react";

import BaseText from "src/components/base_text/base_text";

/* STYLES */
import styles from "./styles";

interface Props {
  textKey: string;
}

export default (props: Props): JSX.Element => {
  const { textKey } = props;

  return <BaseText style={styles.title} textKey={textKey} />;
};
