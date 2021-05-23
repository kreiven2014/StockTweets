/* REACT */
import React from "react";
import { StyleSheet } from "react-native";

/* MODULES */
import { SafeAreaView } from "react-navigation";

/* CUSTOM MODULES */
import Navigator from "./navigation";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default () => (
  <SafeAreaView
    style={styles.root}
    forceInset={{
      horizontal: "always",
    }}>
    <Navigator />
  </SafeAreaView>
);
