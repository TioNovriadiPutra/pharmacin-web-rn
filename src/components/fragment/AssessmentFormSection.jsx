import { StyleSheet, View } from "react-native";
import React from "react";
import { any, array } from "prop-types";
import PharmacinTextAreaInput from "@components/element/PharmacinTextAreaInput";

const AssessmentFormSection = ({ assessmentData, control }) => {
  return (
    <View style={styles.container}>
      {assessmentData.map((item, index) => (
        <View key={index.toString()} style={styles.column}>
          {item.map((tmp, index) => (
            <PharmacinTextAreaInput
              key={index.toString()}
              inputData={tmp}
              control={control}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default AssessmentFormSection;

AssessmentFormSection.propType = {
  assessmentData: array.isRequired,
  control: any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 82,
  },
  column: {
    flex: 1,
    gap: 14,
  },
});
