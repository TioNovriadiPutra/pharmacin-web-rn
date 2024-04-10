import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { bool, func, object } from "prop-types";
import { fonts, systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const DrawerItem = ({ drawerItemData, onNavigate, onSubMenu, status, subMenuStatus }) => {
  const [subMenuHeight, setSubMenuHeight] = useState(0);

  const subMenuAnim = useSharedValue(0);

  const arrowAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(subMenuAnim.value, [0, 1], [0, 180]);

    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  const subMenuAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(subMenuAnim.value, [0, 1], [0, subMenuHeight]);

    return {
      height,
    };
  });

  const onSubMenuLayout = (event) => {
    setSubMenuHeight(event.nativeEvent.layout.height);
  };

  useEffect(() => {
    if (subMenuStatus) {
      subMenuAnim.value = withTiming(1, { duration: 500 });
    } else {
      subMenuAnim.value = withTiming(0, { duration: 500 });
    }
  }, [subMenuStatus]);

  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => {
          if (drawerItemData.subMenu) {
            onSubMenu();
          } else {
            onNavigate(drawerItemData.destination);
          }
        }}
      >
        <Image source={status ? drawerItemData.active : drawerItemData.inactive} />

        <Text numberOfLines={1} style={[systemFonts.H3, { color: status ? colors.Primary : colors.Placeholder, flex: 1 }]}>
          {drawerItemData.label}
        </Text>

        {drawerItemData.subMenu && <Animated.Image source={require("@assets/images/drawerArrow.png")} style={arrowAnimatedStyle} />}
      </Pressable>

      {drawerItemData.subMenu && (
        <Animated.View style={[styles.subMenu, subMenuAnimatedStyle]}>
          <View style={styles.subMenuContent} onLayout={onSubMenuLayout}>
            {drawerItemData.subMenu.map((sub, index) => (
              <Pressable key={index.toString()} onPress={() => onNavigate(drawerItemData.destination, sub.destination)}>
                <Text numberOfLines={1} style={styles.label}>
                  {sub.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default DrawerItem;

DrawerItem.propTypes = {
  drawerItemData: object.isRequired,
  onNavigate: func.isRequired,
  onSubMenu: func,
  status: bool.isRequired,
  subMenuStatus: bool.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  subMenu: {
    overflow: "hidden",
  },
  subMenuContent: {
    paddingLeft: 50,
    gap: 24,
    paddingTop: 24,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.Placeholder,
  },
});
