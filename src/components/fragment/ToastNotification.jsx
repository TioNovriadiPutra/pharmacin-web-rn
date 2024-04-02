import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import Animated from "react-native-reanimated";
import useToast from "@hooks/useToast";
import { systemFonts } from "@themes/fonts";

const ToastNotification = () => {
  const { toastMessage, toastType, toastAnimatedStyle } = useToast();

  return (
    <Animated.View
      style={[
        styles.container,
        toastType === "success"
          ? styles.containerSuccess
          : styles.containerFailed,
        toastAnimatedStyle,
      ]}
    >
      <View
        style={[
          styles.circle,
          {
            backgroundColor:
              toastType === "success" ? colors.Primary : colors.Danger,
          },
        ]}
      >
        <Image
          source={
            toastType === "success"
              ? require("@assets/images/success.png")
              : require("@assets/images/failed.png")
          }
        />
      </View>

      <Text style={[styles.message, systemFonts.H4]}>{toastMessage}</Text>
    </Animated.View>
  );
};

export default ToastNotification;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    paddingVertical: 17,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
    zIndex: 999999,
    width: 322,
    alignSelf: "center",
    bottom: 54,
  },
  containerSuccess: {
    backgroundColor: colors.Success,
    borderColor: colors.Primary,
  },
  containerFailed: {
    backgroundColor: colors.Failed,
    borderColor: colors.Danger,
  },
  circle: {
    padding: 8,
    borderRadius: 50,
    position: "absolute",
  },
  message: {
    color: colors.Black,
    textAlign: "center",
    flex: 1,
  },
});
