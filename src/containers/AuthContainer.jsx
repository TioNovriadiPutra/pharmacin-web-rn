import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { array, node, object, oneOf, oneOfType } from "prop-types";
import { colors } from "@themes/colors";

const AuthContainer = ({ children, type = "login", containerStyle }) => {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          backgroundColor: type === "login" ? colors.Primary : colors.Secondary,
        },
      ]}
    >
      <Image
        source={
          type === "login"
            ? require("@assets/images/loginTopVector.png")
            : require("@assets/images/registerTopVector.png")
        }
        style={[styles.vector, styles.topVector]}
      />

      {children}

      <Image
        source={
          type === "login"
            ? require("@assets/images/loginBottomVector.png")
            : require("@assets/images/registerBottomVector.png")
        }
        style={[styles.vector, styles.bottomVector]}
      />
    </View>
  );
};

export default AuthContainer;

AuthContainer.propTypes = {
  children: node,
  type: oneOf(["login", "register"]),
  containerStyle: oneOfType([object, array]),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 42,
  },
  vector: {
    position: "absolute",
    zIndex: 1,
  },
  topVector: {
    left: 0,
    top: 0,
  },
  bottomVector: {
    right: 0,
    bottom: 0,
  },
});
