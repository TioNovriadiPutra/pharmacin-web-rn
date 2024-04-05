import { roleIdState } from "@store/atom/authState";
import {
  drawerIndexState,
  drawerStatusState,
  drawerSubMenuIndexState,
} from "@store/atom/drawerState";
import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const useDrawer = (prop) => {
  const [drawerStatus, setDrawerStatus] = useRecoilState(drawerStatusState);
  const setDrawerIndex = useSetRecoilState(drawerIndexState);
  const setDrawerSubMenuIndex = useSetRecoilState(drawerSubMenuIndexState);
  const roleId = useRecoilValue(roleIdState);

  const drawerAnim = useSharedValue(0);

  const drawerAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(drawerAnim.value, [0, 1], [68, 274]);
    const borderTopRightRadius = interpolate(drawerAnim.value, [0, 1], [0, 10]);
    const borderBottomRightRadius = interpolate(
      drawerAnim.value,
      [0, 1],
      [0, 10]
    );

    return {
      width,
      borderTopRightRadius,
      borderBottomRightRadius,
    };
  });

  const handleDrawer = () => {
    if (drawerStatus) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  const handleNavigation = (destination, subDestination) => {
    prop.navigation.navigate(
      destination,
      subDestination && {
        screen: subDestination,
      }
    );

    closeDrawer();
  };

  const handleSubMenu = (index) => {
    setDrawerSubMenuIndex(index);

    if (!drawerStatus) {
      openDrawer();
    }
  };

  const closeDrawer = () => {
    setDrawerStatus(false);
    setDrawerSubMenuIndex(null);
  };

  const openDrawer = () => {
    setDrawerStatus(true);
  };

  useEffect(() => {
    if (drawerStatus) {
      drawerAnim.value = withTiming(1, { duration: 500 });
    } else {
      drawerAnim.value = withTiming(0, { duration: 500 });
    }
  }, [drawerStatus]);

  useEffect(() => {
    setDrawerIndex(prop.state.index);
  }, [prop.state.index]);

  return {
    drawerStatus,
    roleId,
    drawerAnimatedStyle,
    handleDrawer,
    handleNavigation,
    handleSubMenu,
    openDrawer,
    closeDrawer,
  };
};

export default useDrawer;
