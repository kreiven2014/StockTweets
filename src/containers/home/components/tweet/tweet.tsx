/* REACT */
import React from "react";
import { View, Text } from "react-native";

/* CUSTOM MODULES */
import { ImagePlaceholder } from "src/components";

/* STYLES */
import styles from "./styles";

export interface Props {
  body: string;
  user: {
    // TODO(mikle): Partitial type
    name: string;
    avatar_url: string;
  };
}

export default (props: Props): JSX.Element => {
  const { body, user } = props;

  return (
    <View style={[styles.container]}>
      <ImagePlaceholder
        style={styles.avatarImage}
        source={{
          uri: user.avatar_url,
        }}
      />
      <Text style={styles.avatarName}>{`@${user.name}`}</Text>
      <Text>{body}</Text>
    </View>
  );
};
