import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const DrawerProfileSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton circle width={42} height={42} />

      <View style={styles.description}>
        <Skeleton width={71} height={20} />

        <Skeleton width={59} height={18} />
      </View>

      <Image source={require("@assets/images/dotMenu.png")} />
    </View>
  );
};

export default DrawerProfileSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 13,
    gap: 13,
    overflow: "hidden",
  },
  description: {
    flex: 1,
    gap: 4,
  },
});
