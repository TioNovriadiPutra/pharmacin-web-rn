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
import Bar from "@components/element/Bar";
import { drawerAdmin } from "@utils/constant/drawer";

const CustomDrawer = (prop) => {
  const {
    drawerStatus,
    roleId,
    drawerAnimatedStyle,
    handleDrawer,
    handleNavigation,
    handleSubMenu,
    closeDrawer,
  } = useDrawer(prop);

  return (
    <View style={styles.mainContainer}>
      {drawerStatus && (
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
      )}
      <Animated.View style={[styles.container, drawerAnimatedStyle]}>
        <DrawerLogo onPress={handleDrawer} />

        <DrawerNotification onNavigate={handleNavigation} />

        <Bar containerStyle={styles.bar} />

        <DrawerList
          onNavigate={handleNavigation}
          onSubMenu={handleSubMenu}
          drawerData={drawerAdmin}
        />
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
  bar: {
    marginVertical: 24,
    marginHorizontal: 15,
  },
});
