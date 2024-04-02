import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { any, object } from "prop-types";
import { colors } from "@themes/colors";
import { useController } from "react-hook-form";
import useTextInput from "@hooks/useTextInput";
import { systemFonts } from "@themes/fonts";

const PharmacinTextInput = ({ control, inputData, validationError }) => {
  const { showPassword, handlePassword } = useTextInput();

  const { field } = useController({
    name: inputData.name,
    control,
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputBox,
          {
            paddingVertical: inputData.type === "password" ? 3 : 10,
            borderColor: validationError ? colors.Danger : colors.LightBorder,
          },
        ]}
      >
        <TextInput
          value={field.value}
          placeholder={inputData.placeholder}
          placeholderTextColor={colors.Placeholder}
          onChangeText={field.onChange}
          secureTextEntry={
            inputData.type === "password" ? !showPassword : false
          }
          style={[styles.input, systemFonts.H4]}
        />

        {inputData.type === "password" && (
          <Pressable onPress={handlePassword}>
            <Image
              source={
                showPassword
                  ? require("@assets/images/see.png")
                  : require("@assets/images/unsee.png")
              }
            />
          </Pressable>
        )}
      </View>

      {validationError && (
        <Text style={[styles.error, systemFonts.P]}>
          {validationError.message}
        </Text>
      )}
    </View>
  );
};

export default PharmacinTextInput;

PharmacinTextInput.propTypes = {
  control: any.isRequired,
  inputData: object.isRequired,
  validationError: object,
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: colors.White,
  },
  input: {
    color: colors.Black,
    outlineStyle: "none",
    flex: 1,
  },
  error: {
    position: "absolute",
    top: "100%",
    left: 14,
    color: colors.Danger,
  },
});
