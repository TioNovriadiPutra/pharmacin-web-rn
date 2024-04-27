import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { node } from "prop-types";

const ManajemenContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ManajemenContainer;

ManajemenContainer.propType = {
  children: node,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
    flex: 1,
    padding: 24,
  },
});
