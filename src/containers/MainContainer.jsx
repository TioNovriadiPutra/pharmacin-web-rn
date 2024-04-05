import { StyleSheet, View } from "react-native";
import React from "react";
import { node } from "prop-types";
import { colors } from "@themes/colors";

const MainContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default MainContainer;

MainContainer.propTypes = {
  children: node,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Default,
    padding: 14,
    gap: 14,
  },
});
