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
  const { field } = useController({
    name: inputData.name,
    control,
  });

  const { showPassword, handlePassword, handleNormal, handleNumber } =
    useTextInput(field);

  return (
    <View style={styles.container}>
      {inputData.outside && (
        <Text style={[systemFonts.H3, styles.outside]}>
          {inputData.placeholder}
        </Text>
      )}

      <View
        style={[
          styles.inputBox,
          {
            paddingVertical: inputData.type === "password" ? 3 : 10,
            borderColor: validationError ? colors.Danger : colors.LightBorder,
          },
          inputData.type === "search"
            ? styles.inputBoxSearch
            : inputData.readOnly
            ? styles.inputBoxInactive
            : styles.inputBoxElse,
        ]}
      >
        {inputData.type === "search" && (
          <Image source={require("@assets/images/search.png")} />
        )}

        <TextInput
          value={field.value}
          placeholder={
            inputData.type === "search"
              ? "Cari disini..."
              : inputData.outside
              ? ""
              : inputData.placeholder
          }
          placeholderTextColor={colors.Placeholder}
          onChangeText={
            inputData.type === "number" ? handleNumber : handleNormal
          }
          secureTextEntry={
            inputData.type === "password" ? !showPassword : false
          }
          style={[
            styles.input,
            systemFonts.H4,
            { textAlign: inputData.center ? "center" : "auto" },
          ]}
          onSubmitEditing={inputData.type === "search" && inputData.onSubmit}
          editable={inputData.readOnly ? !inputData.readOnly : true}
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
    gap: 6,
  },
  inputBox: {
    paddingHorizontal: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  inputBoxInactive: {
    backgroundColor: colors.Default,
  },
  inputBoxSearch: {
    backgroundColor: colors.Inactive,
    width: 350,
  },
  inputBoxElse: {
    backgroundColor: colors.White,
    borderWidth: 1,
  },
  input: {
    color: colors.Black,
    outlineStyle: "none",
    flex: 1,
    overflow: "hidden",
  },
  error: {
    position: "absolute",
    top: "100%",
    left: 14,
    color: colors.Danger,
  },
  outside: {
    color: colors.SubTitle,
  },
});
