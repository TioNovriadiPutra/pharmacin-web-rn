import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { any, array, bool } from "prop-types";
import PharmacinTextInput from "@components/element/PharmacinTextInput";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "@store/atom/formState";
import PharmacinDropdown from "@components/element/PharmacinDropdown";
import PharmacinCurrencyInput from "@components/element/PharmacinCurrencyInput";
import PharmacinCalendar from "@components/element/PharmacinCalendar";
import ScrollContainer from "@containers/ScrollContainer";

const Form = ({ control, inputListData, showIndicator = true }) => {
  const validationError = useRecoilValue(validationErrorState);

  return (
    <ScrollContainer
      containerStyle={styles.container}
      scrollContainerStyle={styles.list}
      showIndicator={showIndicator}
    >
      {inputListData.map((input, index) => {
        if (input.type === "dropdown") {
          return (
            <PharmacinDropdown
              key={index.toString()}
              control={control}
              inputData={input}
              validationError={
                validationError &&
                validationError.find((error) => error.field === input.name)
              }
            />
          );
        } else if (input.type === "currency") {
          return (
            <PharmacinCurrencyInput
              key={index.toString()}
              control={control}
              inputData={input}
              validationError={
                validationError &&
                validationError.find((error) => error.field === input.name)
              }
            />
          );
        } else if (input.type === "date") {
          return (
            <PharmacinCalendar
              key={index.toString()}
              control={control}
              inputData={input}
              validationError={
                validationError &&
                validationError.find((error) => error.field === input.name)
              }
            />
          );
        } else {
          return (
            <PharmacinTextInput
              key={index.toString()}
              control={control}
              inputData={input}
              validationError={
                validationError &&
                validationError.find((error) => error.field === input.name)
              }
            />
          );
        }
      })}
    </ScrollContainer>
  );
};

export default Form;

Form.propTypes = {
  control: any.isRequired,
  inputListData: array.isRequired,
  showIndicator: bool,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    gap: 24,
  },
});
