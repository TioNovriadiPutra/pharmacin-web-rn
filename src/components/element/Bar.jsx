import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { array, object, oneOfType } from "prop-types";

const Bar = ({ containerStyle }) => {
  return <View style={[styles.container, containerStyle]} />;
};

export default Bar;

Bar.propTypes = {
  containerStyle: oneOfType([object, array]),
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: colors.Border,
  },
});
