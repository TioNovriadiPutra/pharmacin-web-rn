import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import useFormModal from "@hooks/useFormModal";
import Animated from "react-native-reanimated";
import { colors } from "@themes/colors";
import ModalBackdrop from "@components/element/ModalBackdrop";
import PageForm from "@components/fragment/PageForm";

const FormModal = () => {
  const { formAnimatedStyle, formData, open, handleBackdropPress } = useFormModal();

  return (
    <ModalContainer visible={open} modalStyle={styles.modal}>
      <Animated.View style={[styles.content, formAnimatedStyle]}>{formData && <PageForm formData={formData} />}</Animated.View>

      <ModalBackdrop onPress={handleBackdropPress} />
    </ModalContainer>
  );
};

export default FormModal;

const styles = StyleSheet.create({
  modal: {
    flexDirection: "row",
  },
  content: {
    backgroundColor: colors.White,
    height: "100%",
    paddingHorizontal: 14,
    paddingTop: 36,
    paddingBottom: 24,
    overflow: "hidden",
  },
});
