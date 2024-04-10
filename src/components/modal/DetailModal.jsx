import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import useDetailModal from "@hooks/useDetailModal";
import { colors } from "@themes/colors";
import Animated from "react-native-reanimated";
import ModalBackdrop from "@components/element/ModalBackdrop";
import PageDetail from "@components/fragment/PageDetail";

const DetailModal = () => {
  const { open, detailData, detailAnimatedStyle, handleBackdropPress } = useDetailModal();

  return (
    <ModalContainer visible={open} modalStyle={styles.modal}>
      <ModalBackdrop onPress={handleBackdropPress} />

      <Animated.View style={[styles.content, detailAnimatedStyle]}>{detailData && <PageDetail detailData={detailData} />}</Animated.View>
    </ModalContainer>
  );
};

export default DetailModal;

const styles = StyleSheet.create({
  modal: {
    flexDirection: "row",
  },
  content: {
    backgroundColor: colors.White,
    height: "100%",
    paddingHorizontal: 46,
    paddingTop: 36,
    paddingBottom: 24,
    overflow: "hidden",
  },
});
