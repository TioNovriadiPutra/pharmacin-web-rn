import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { func, object, string } from "prop-types";
import DetailButton from "@components/element/DetailButton";
import { systemFonts } from "@themes/fonts";
import DetailSubmitButton from "@components/element/DetailSubmitButton";

const DetailHeader = ({ headerTitle, detailData, submitData }) => {
  return (
    <View style={styles.container}>
      <Text style={[systemFonts.H3, styles.title]}>{headerTitle}</Text>

      {detailData && <DetailButton detailData={detailData} />}

      {submitData && <DetailSubmitButton onSubmit={submitData} />}
    </View>
  );
};

export default DetailHeader;

DetailHeader.propTypes = {
  headerTitle: string.isRequired,
  detailData: object,
  submitData: func,
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  title: {
    color: colors.Title,
  },
});
