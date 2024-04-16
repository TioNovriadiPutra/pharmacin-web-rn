import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@assets/images/profile.png")} />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    width: 42,
    height: 42,
    backgroundColor: colors.Profile,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
