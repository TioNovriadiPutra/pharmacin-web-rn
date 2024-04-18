import { StyleSheet, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import SubmitButton from "@components/element/SubmitButton";
import { useForm } from "react-hook-form";
import PharmacinTextInput from "@components/element/PharmacinTextInput";

const PageHeaderFunction = ({ headerFunctionData }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: headerFunctionData.defaultValues || {},
  });

  return (
    <View style={styles.container}>
      {headerFunctionData.function.map((func, index) => {
        if (func.type === "button") {
          return (
            <SubmitButton
              key={index.toString()}
              label={func.label}
              color={func.color}
              buttonStyle={styles.button}
              onPress={func.onPress}
            />
          );
        } else if (func.type === "search") {
          return (
            <PharmacinTextInput
              key={index.toString()}
              control={control}
              inputData={func}
            />
          );
        }
      })}
    </View>
  );
};

export default PageHeaderFunction;

PageHeaderFunction.propTypes = {
  headerFunctionData: object,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
  button: {
    paddingHorizontal: 42,
  },
});
