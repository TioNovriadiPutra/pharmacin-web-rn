import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import useDrawer from "@hooks/useDrawer";
import DrawerLogo from "@components/fragment/DrawerLogo";
import { colors } from "@themes/colors";
import DrawerList from "@components/fragment/DrawerList";
import DrawerNotification from "@components/fragment/DrawerNotification";

const CustomDrawer = () => {
  const { drawerStatus, drawerAnimatedStyle, handleDrawer, closeDrawer } =
    useDrawer();

  return (
    <View style={styles.mainContainer}>
      {drawerStatus && (
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
      )}
      <Animated.View style={[styles.container, drawerAnimatedStyle]}>
        <DrawerLogo onPress={handleDrawer} />

        <DrawerNotification />

        <DrawerList />
      </Animated.View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
  },
  container: {
    height: "100%",
    paddingVertical: 24,
    overflow: "hidden",
    backgroundColor: colors.White,
    zIndex: 2,
  },
  backdrop: {
    position: "absolute",
    zIndex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: colors.Modal,
  },
});
