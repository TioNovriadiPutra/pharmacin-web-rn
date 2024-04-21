import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const InvoiceSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton height={120} style={styles.block} />

      <Skeleton style={[styles.table, styles.block]} />
    </View>
  );
};

export default InvoiceSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 14,
  },
  block: {
    borderRadius: 10,
  },
  table: {
    flex: 1,
  },
});
