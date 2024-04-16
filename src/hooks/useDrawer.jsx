import {
  drawerIndexState,
  drawerStatusState,
  drawerSubMenuIndexState,
  showDrawerProfileMenuState,
} from "@store/atom/drawerState";
import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilState, useSetRecoilState } from "recoil";
import useUserController from "src/controllers/userController";

const useDrawer = (prop) => {
  const [drawerStatus, setDrawerStatus] = useRecoilState(drawerStatusState);
  const setDrawerIndex = useSetRecoilState(drawerIndexState);
  const setDrawerSubMenuIndex = useSetRecoilState(drawerSubMenuIndexState);
  const [showSetting, setShowSetting] = useRecoilState(
    showDrawerProfileMenuState
  );

  const { useGetUserProfileQuery } = useUserController();

  const { isLoading } = useGetUserProfileQuery();

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

    if (showSetting) {
      closeSetting();
    }
  };

  const closeDrawer = () => {
    setDrawerStatus(false);
    setDrawerSubMenuIndex(null);
    closeSetting();
  };

  const openDrawer = () => {
    setDrawerStatus(true);
  };

  const openSetting = () => {
    setShowSetting(true);
    setDrawerSubMenuIndex(null);
  };

  const closeSetting = () => {
    setShowSetting(false);
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
    drawerAnimatedStyle,
    handleDrawer,
    handleNavigation,
    handleSubMenu,
    closeDrawer,
    isLoading,
    openSetting,
  };
};

export default useDrawer;
