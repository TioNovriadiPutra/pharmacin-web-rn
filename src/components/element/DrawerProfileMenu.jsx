import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { settingMenu } from "@utils/constant/drawer";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";

const DrawerProfileMenu = () => {
  return (
    <View style={styles.menu}>
      {settingMenu.map((menu, index) => (
        <Pressable
          key={index.toString()}
          style={[
            styles.button,
            { borderBottomWidth: index < settingMenu.length - 1 ? 1 : 0 },
          ]}
          onPress={menu.onPress}
        >
          <Image source={menu.icon} />

          <Text style={[systemFonts.H3, styles.label]}>{menu.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default DrawerProfileMenu;

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    backgroundColor: colors.White,
    paddingHorizontal: 10,
    borderRadius: 8,
    left: "110%",
    width: 265,
    bottom: 24,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderBottomColor: colors.Border,
  },
  label: {
    color: colors.Placeholder,
  },
});
