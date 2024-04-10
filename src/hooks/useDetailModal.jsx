import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { detailDataState, showDetailModalState } from "@store/atom/detailState";
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const useDetailModal = () => {
  const [open, setOpen] = useState(false);

  const [showModal, setShowModal] = useRecoilState(showDetailModalState);
  const [detailData, setDetailData] = useRecoilState(detailDataState);

  const detailAnim = useSharedValue(0);

  const detailAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(detailAnim.value, [0, 1], [0, 542]);
    const borderTopLeftRadius = interpolate(detailAnim.value, [0, 1], [0, 10]);
    const borderBottomLeftRadius = interpolate(detailAnim.value, [0, 1], [0, 10]);

    return {
      width,
      borderTopLeftRadius,
      borderBottomLeftRadius,
    };
  });

  const openModal = () => {
    setOpen(true);
    detailAnim.value = withTiming(1, { duration: 500 });
  };

  const closeModal = () => {
    detailAnim.value = withTiming(0, { duration: 500 });
    setTimeout(() => {
      setDetailData(null);
      setOpen(false);
    }, 500);
  };

  const handleBackdropPress = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      openModal();
    } else {
      closeModal();
    }
  }, [showModal]);

  return {
    detailAnimatedStyle,
    open,
    detailData,
    handleBackdropPress,
  };
};

export default useDetailModal;
