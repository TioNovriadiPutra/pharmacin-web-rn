import { StyleSheet, View } from "react-native";
import React from "react";
import { bool, object } from "prop-types";
import SubmitButton from "@components/element/SubmitButton";
import { useForm } from "react-hook-form";
import PharmacinTextInput from "@components/element/PharmacinTextInput";
import PageSwitch from "@components/element/PageSwitch";

const PageHeaderFunction = ({ headerFunctionData, secondary = false }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: headerFunctionData.defaultValues || {},
  });

  return (
    <View style={styles.container}>
      {headerFunctionData.function.map((func, index) => {
        if (func.type === "button") {
          return <SubmitButton key={index.toString()} label={func.label} color={func.color} buttonStyle={secondary ? styles.buttonSecondary : styles.button} onPress={func.onPress} />;
        } else if (func.type === "search") {
          return <PharmacinTextInput key={index.toString()} control={control} inputData={func} />;
        } else if (func.type === "switch") {
          return (
            <PageSwitch key={index.toString()} switchData={func.switchData} color={func.color} buttonStyle={secondary && styles.buttonSecondary} containerStyle={secondary && styles.buttonSecondary} />
          );
        }
      })}
    </View>
  );
};

export default PageHeaderFunction;

PageHeaderFunction.propTypes = {
  headerFunctionData: object,
  secondary: bool,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
  button: {
    paddingHorizontal: 42,
  },
  buttonSecondary: {
    flex: 1,
    alignItems: "center",
  },
});
