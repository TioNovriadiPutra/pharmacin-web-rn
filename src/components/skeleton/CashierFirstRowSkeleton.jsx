import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const CashierFirstRowSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={[styles.box, styles.box1]} />

      <Skeleton style={[styles.box, styles.box2]} />
    </View>
  );
};

export default CashierFirstRowSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
  box: {
    borderRadius: 10,
    height: 190,
  },
  box1: {
    flex: 1,
  },
  box2: {
    flex: 2,
  },
});
