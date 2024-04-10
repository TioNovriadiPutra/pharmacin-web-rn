import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import { array, bool, node, object, oneOfType } from "prop-types";
import { colors } from "@themes/colors";

const ModalContainer = ({ children, visible, modalStyle }) => {
  return (
    <Modal transparent visible={visible}>
      <View style={[styles.backdrop, modalStyle]}>{children}</View>
    </Modal>
  );
};

export default ModalContainer;

ModalContainer.propTypes = {
  children: node,
  visible: bool.isRequired,
  modalStyle: oneOfType([object, array]),
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.Modal,
  },
});
