import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { any, array } from "prop-types";
import PharmacinTextInput from "@components/element/PharmacinTextInput";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "@store/atom/formState";
import PharmacinDropdown from "@components/element/PharmacinDropdown";
import PharmacinCurrencyInput from "@components/element/PharmacinCurrencyInput";

const Form = ({ control, inputListData }) => {
  const validationError = useRecoilValue(validationErrorState);

  return (
    <ScrollView contentContainerStyle={styles.list}>
      {inputListData.map((input, index) => {
        if (input.type === "dropdown") {
          return <PharmacinDropdown key={index.toString()} control={control} inputData={input} validationError={validationError && validationError.find((error) => error.field === input.name)} />;
        } else if (input.type === "currency") {
          return <PharmacinCurrencyInput key={index.toString()} control={control} inputData={input} validationError={validationError && validationError.find((error) => error.field === input.name)} />;
        } else {
          return <PharmacinTextInput key={index.toString()} control={control} inputData={input} validationError={validationError && validationError.find((error) => error.field === input.name)} />;
        }
      })}
    </ScrollView>
  );
};

export default Form;

Form.propTypes = {
  control: any.isRequired,
  inputListData: array.isRequired,
};

const styles = StyleSheet.create({
  list: {
    gap: 24,
  },
});
