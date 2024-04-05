import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const PageTableSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton height={54} animation="pulse" style={styles.box} />

      <Skeleton animation="pulse" style={[styles.box, styles.table]} />
    </View>
  );
};

export default PageTableSkeleton;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
  },
  box: {
    borderRadius: 10,
  },
  table: {
    flex: 1,
  },
});
