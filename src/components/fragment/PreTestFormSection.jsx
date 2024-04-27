import { StyleSheet, View } from "react-native";
import React from "react";
import { any, array } from "prop-types";
import PharmacinCalculationInput from "@components/element/PharmacinCalculationInput";

const PreTestFormSection = ({ preTestData, control }) => {
  return (
    <View style={styles.container}>
      {preTestData.map((item, index) => (
        <PharmacinCalculationInput
          key={index.toString()}
          inputData={item}
          control={control}
        />
      ))}
    </View>
  );
};

export default PreTestFormSection;

PreTestFormSection.propType = {
  preTestData: array.isRequired,
  control: any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 48,
  },
});
