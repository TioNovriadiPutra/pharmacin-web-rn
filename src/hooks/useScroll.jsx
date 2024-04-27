import { useRef, useState } from "react";
import { Animated } from "react-native";

const useScroll = () => {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

  const scrollAnim = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollAnim,
    visibleScrollBarHeight / completeScrollBarHeight
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: "clamp",
  });

  return {
    scrollIndicatorSize,
    scrollIndicatorPosition,
    scrollAnim,
    setCompleteScrollBarHeight,
    setVisibleScrollBarHeight,
  };
};

export default useScroll;
