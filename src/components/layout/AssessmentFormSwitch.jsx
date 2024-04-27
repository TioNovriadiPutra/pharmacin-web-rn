import { Dimensions, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { switchAssessmentIndex } from "@store/atom/pageState";
import { any, array } from "prop-types";
import { perawatanForm } from "@utils/constant/form";
import PerawatanForm from "@components/fragment/PerawatanForm";
import PengajuanObatForm from "@components/fragment/PengajuanObatForm";
import TindakanForm from "@components/fragment/TindakanForm";

const AssessmentFormSwitch = ({ control, setValue }) => {
  const switchIndex = useRecoilValue(switchAssessmentIndex);

  const pageRef = useRef(null);

  const getItemLayout = (data, index) => ({
    length: Dimensions.get("window").width - 96,
    offset: (Dimensions.get("window").width - 96) * index,
    index,
  });

  useEffect(() => {
    if (pageRef) {
      pageRef.current.scrollToIndex({ animated: false, index: switchIndex });
    }
  }, [pageRef, switchIndex]);

  return (
    <FlatList
      ref={pageRef}
      data={perawatanForm.inputs}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      getItemLayout={getItemLayout}
      renderItem={({ item, index }) => {
        if (index === 0) {
          return <PerawatanForm control={control} formData={item} />;
        } else if (index === 1) {
          return (
            <PengajuanObatForm
              control={control}
              formData={item}
              setValue={setValue}
            />
          );
        } else {
          return (
            <TindakanForm
              control={control}
              formData={item}
              setValue={setValue}
            />
          );
        }
      }}
    />
  );
};

export default AssessmentFormSwitch;

AssessmentFormSwitch.propType = {
  switchData: array.isRequired,
  control: any.isRequired,
  setValue: any.isRequired,
};

const styles = StyleSheet.create({});
