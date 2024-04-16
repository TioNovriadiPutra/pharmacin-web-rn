import { StyleSheet, View } from "react-native";
import React from "react";
import DrawerItem from "@components/element/DrawerItem";
import { notifDrawer } from "@utils/constant/drawer";
import { func } from "prop-types";
import { useRecoilValue } from "recoil";
import { drawerIndexState } from "@store/atom/drawerState";

const DrawerNotification = ({ onNavigate }) => {
  const drawerIndex = useRecoilValue(drawerIndexState);

  return (
    <View style={styles.container}>
      <DrawerItem
        drawerItemData={notifDrawer}
        onNavigate={onNavigate}
        status={drawerIndex === 0}
        subMenuStatus={false}
      />
    </View>
  );
};

export default DrawerNotification;

DrawerNotification.propTypes = {
  onNavigate: func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    overflow: "hidden",
  },
});
