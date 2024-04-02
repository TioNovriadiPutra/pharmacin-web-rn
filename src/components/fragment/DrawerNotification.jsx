import { StyleSheet, View } from "react-native";
import React from "react";
import DrawerItem from "@components/element/DrawerItem";
import { notifDrawer } from "@utils/constant/drawer";

const DrawerNotification = () => {
  return (
    <View style={styles.container}>
      <DrawerItem drawerItemData={notifDrawer} />
    </View>
  );
};

export default DrawerNotification;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
