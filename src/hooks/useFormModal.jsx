import { showFormModalState } from "@store/atom/pageState";
import { useRecoilState, useSetRecoilState } from "recoil";
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect, useState } from "react";
import { formDataState, validationErrorState } from "@store/atom/formState";

const useFormModal = () => {
  const [open, setOpen] = useState(false);

  const [showModal, setShowModal] = useRecoilState(showFormModalState);
  const [formData, setFormData] = useRecoilState(formDataState);
  const setValidationError = useSetRecoilState(validationErrorState);

  const formAnim = useSharedValue(0);

  const formAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(formAnim.value, [0, 1], [0, 542]);
    const borderTopRightRadius = interpolate(formAnim.value, [0, 1], [0, 10]);
    const borderBottomRightRadius = interpolate(formAnim.value, [0, 1], [0, 10]);

    return {
      width,
      borderTopRightRadius,
      borderBottomRightRadius,
    };
  });

  const openModal = () => {
    setOpen(true);
    formAnim.value = withTiming(1, { duration: 500 });
  };

  const closeModal = () => {
    formAnim.value = withTiming(0, { duration: 500 });
    setTimeout(() => {
      setFormData(null);
      setOpen(false);
      setValidationError(null);
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
    formAnimatedStyle,
    open,
    formData,
    handleBackdropPress,
  };
};

export default useFormModal;
