import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { func } from "prop-types";

const ModalBackdrop = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.backdrop} />
    </TouchableWithoutFeedback>
  );
};

export default ModalBackdrop;

ModalBackdrop.propTypes = {
  onPress: func,
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
});
