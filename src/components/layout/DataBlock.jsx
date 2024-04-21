import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { array, number } from "prop-types";
import DataBlockList from "@components/fragment/DataBlockList";

const DataBlock = ({ blockData }) => {
  return (
    <View style={styles.container}>
      {blockData.map((block) => (
        <DataBlockList blockData={block} />
      ))}
    </View>
  );
};

export default DataBlock;

DataBlock.propTypes = {
  blockData: array.isRequired,
  height: number,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
    flexDirection: "row",
    gap: 34,
  },
});
