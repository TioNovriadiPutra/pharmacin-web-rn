import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { func } from "prop-types";

const DetailSubmitButton = ({ onSubmit }) => {
  return (
    <Pressable onPress={onSubmit} style={styles.container}>
      <Image source={require("@assets/images/submit.png")} />
    </Pressable>
  );
};

export default DetailSubmitButton;

DetailSubmitButton.propType = {
  onSubmit: func.isRequired,
};

const styles = StyleSheet.create({});
