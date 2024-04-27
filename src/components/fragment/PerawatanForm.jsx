import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import PreTestFormSection from "./PreTestFormSection";
import { any, object } from "prop-types";
import Bar from "@components/element/Bar";
import AssessmentFormSection from "./AssessmentFormSection";

const PerawatanForm = ({ formData, control }) => {
  return (
    <View style={styles.container}>
      <PreTestFormSection
        preTestData={formData.firstSection}
        control={control}
      />

      <Bar containerStyle={styles.bar} />

      <AssessmentFormSection
        assessmentData={formData.secondSection}
        control={control}
      />
    </View>
  );
};

export default PerawatanForm;

PerawatanForm.propType = {
  formData: object.isRequired,
  control: any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 18,
    width: Dimensions.get("window").width - 96,
  },
  bar: {
    marginVertical: 24,
  },
});
