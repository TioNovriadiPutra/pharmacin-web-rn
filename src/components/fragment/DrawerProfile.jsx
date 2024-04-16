import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import ProfilePicture from "@components/element/ProfilePicture";
import ProfileDescription from "@components/element/ProfileDescription";
import DrawerProfileMenu from "@components/element/DrawerProfileMenu";
import { func } from "prop-types";
import { useRecoilValue } from "recoil";
import { showDrawerProfileMenuState } from "@store/atom/drawerState";

const DrawerProfile = ({ openSetting }) => {
  const showMenu = useRecoilValue(showDrawerProfileMenuState);

  return (
    <View
      style={[styles.container, { overflow: showMenu ? "visible" : "hidden" }]}
    >
      <ProfilePicture />

      <ProfileDescription />

      <Pressable onPress={openSetting}>
        <Image source={require("@assets/images/dotMenu.png")} />
      </Pressable>

      <DrawerProfileMenu />
    </View>
  );
};

export default DrawerProfile;

DrawerProfile.propTypes = {
  openSetting: func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 13,
    gap: 13,
  },
});
