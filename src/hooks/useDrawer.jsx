import { drawerStatusState } from "@store/atom/drawerState";
import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilState } from "recoil";

const useDrawer = () => {
  const [drawerStatus, setDrawerStatus] = useRecoilState(drawerStatusState);

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

  const closeDrawer = () => {
    setDrawerStatus(false);
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

  return {
    drawerStatus,
    drawerAnimatedStyle,
    handleDrawer,
    openDrawer,
    closeDrawer,
  };
};

export default useDrawer;
