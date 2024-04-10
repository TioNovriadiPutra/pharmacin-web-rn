import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { array, func, object, oneOfType } from "prop-types";

const BackButton = ({ onBack, buttonStyle }) => {
  return (
    <Pressable onPress={onBack} style={[styles.container, buttonStyle]}>
      <Image source={require("@assets/images/back.png")} />
    </Pressable>
  );
};

export default BackButton;

BackButton.propTypes = {
  onBack: func,
  buttonStyle: oneOfType([object, array]),
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 999999,
  },
});
