import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { object } from "prop-types";

const DrawerItem = ({ drawerItemData }) => {
  return (
    <Pressable style={styles.container}>
      <Image source={drawerItemData.active} />

      <Text>{drawerItemData.label}</Text>
    </Pressable>
  );
};

export default DrawerItem;

DrawerItem.propTypes = {
  drawerItemData: object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
