import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { array, func, object, oneOfType, string } from "prop-types";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";

const SubmitButton = ({
  label,
  color = colors.Inactive,
  buttonStyle,
  onPress,
}) => {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }, buttonStyle]}
      onPress={onPress}
    >
      <Text
        style={[
          systemFonts.H2,
          {
            color:
              color === colors.Inactive ? colors.Placeholder : colors.White,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  label: string.isRequired,
  color: string,
  buttonStyle: oneOfType([object, array]),
  onPress: func,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: "center",
  },
});
