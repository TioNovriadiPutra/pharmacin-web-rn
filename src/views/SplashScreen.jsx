import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContainer from "@containers/AuthContainer";

const SplashScreen = () => {
  return (
    <AuthContainer containerStyle={styles.container}>
      <Image source={require("@assets/images/logoBig.png")} />
    </AuthContainer>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
