import { FlatList, StyleSheet } from "react-native";
import React from "react";
import DetailItem from "@components/element/DetailItem";
import { array } from "prop-types";

const DetailList = ({ listData }) => {
  return <FlatList data={listData} keyExtractor={(_, index) => index.toString()} contentContainerStyle={styles.list} renderItem={({ item }) => <DetailItem itemData={item} />} />;
};

export default DetailList;

DetailList.propTypes = {
  listData: array.isRequired,
};

const styles = StyleSheet.create({
  list: {
    gap: 14,
  },
});
