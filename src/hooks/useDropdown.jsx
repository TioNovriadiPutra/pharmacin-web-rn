import { useEffect, useState } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const useDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownAnim = useSharedValue(0);

  const dropdownIconAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(dropdownAnim.value, [0, 1], [0, 180]);

    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItem = (field, item) => {
    field.onChange(item);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (showDropdown) {
      dropdownAnim.value = withTiming(1, { duration: 500 });
    } else {
      dropdownAnim.value = withTiming(0, { duration: 500 });
    }
  }, [showDropdown]);

  return {
    showDropdown,
    handleDropdown,
    handleItem,
    dropdownIconAnimatedStyle,
  };
};

export default useDropdown;
