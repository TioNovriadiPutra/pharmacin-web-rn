import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const DataBlockItem = ({ blockData }) => {
  return (
    <View style={styles.container}>
      <Text style={[systemFonts.H3, styles.title]}>{blockData.title}</Text>

      <Text style={[systemFonts.H3, styles.value]}>: {blockData.value}</Text>
    </View>
  );
};

export default DataBlockItem;

DataBlockItem.propTypes = {
  blockData: object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  title: {
    color: colors.SubTitle,
    flex: 1,
  },
  value: {
    color: colors.Black,
    flex: 2,
  },
});
