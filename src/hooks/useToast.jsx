import {
  toastMessageState,
  toastShowState,
  toastTypeState,
} from "@store/atom/toastState";
import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useRecoilState, useRecoilValue } from "recoil";

const useToast = () => {
  const toastMessage = useRecoilValue(toastMessageState);
  const toastType = useRecoilValue(toastTypeState);
  const [toastShow, setToastShow] = useRecoilState(toastShowState);

  const toastAnim = useSharedValue(0);

  const toastAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(toastAnim.value, [0, 1], [150, 0]);

    return {
      transform: [{ translateY }],
    };
  });

  useEffect(() => {
    if (toastShow) {
      toastAnim.value = withSequence(
        withTiming(1, { duration: 500 }),
        withDelay(2000, withTiming(0, { duration: 500 }))
      );

      setToastShow(false);
    }
  }, [toastShow]);

  return {
    toastMessage,
    toastType,
    toastAnimatedStyle,
  };
};

export default useToast;
