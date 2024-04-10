import { StyleSheet, View } from "react-native";
import React from "react";
import { any, array } from "prop-types";
import PharmacinTextInput from "@components/element/PharmacinTextInput";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "@store/atom/formState";
import PharmacinDropdown from "@components/element/PharmacinDropdown";

const Form = ({ control, inputListData }) => {
  const validationError = useRecoilValue(validationErrorState);

  return (
    <View style={styles.list}>
      {inputListData.map((input, index) => {
        if (input.type === "dropdown") {
          return <PharmacinDropdown key={index.toString()} control={control} inputData={input} validationError={validationError && validationError.find((error) => error.field === input.name)} />;
        } else {
          return <PharmacinTextInput key={index.toString()} control={control} inputData={input} validationError={validationError && validationError.find((error) => error.field === input.name)} />;
        }
      })}
    </View>
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
