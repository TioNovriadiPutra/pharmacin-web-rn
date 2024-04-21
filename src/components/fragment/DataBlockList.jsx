import { StyleSheet, View } from "react-native";
import React from "react";
import DataBlockItem from "@components/element/DataBlockItem";
import { array } from "prop-types";

const DataBlockList = ({ blockData }) => {
  return (
    <View style={styles.container}>
      {blockData.map((block, index) => (
        <DataBlockItem key={index.toString()} blockData={block} />
      ))}
    </View>
  );
};

export default DataBlockList;

DataBlockList.propTypes = {
  blockData: array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    width: "100%",
  },
});
