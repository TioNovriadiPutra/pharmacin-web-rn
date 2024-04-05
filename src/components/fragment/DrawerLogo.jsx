import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { func } from "prop-types";

const DrawerLogo = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={require("@assets/images/drawerLogo.png")} />

      <Text style={[systemFonts.H1, styles.title]}>Pharmacin</Text>
    </Pressable>
  );
};

export default DrawerLogo;

DrawerLogo.propTypes = {
  onPress: func,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 19,
    marginBottom: 46,
  },
  title: {
    color: colors.Primary,
  },
});
