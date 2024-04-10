import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { object, string } from "prop-types";
import DetailButton from "@components/element/DetailButton";
import { systemFonts } from "@themes/fonts";

const DetailHeader = ({ headerTitle, detailData }) => {
  return (
    <View style={styles.container}>
      <Text style={[systemFonts.H3, styles.title]}>{headerTitle}</Text>

      {detailData && <DetailButton detailData={detailData} />}
    </View>
  );
};

export default DetailHeader;

DetailHeader.propTypes = {
  headerTitle: string.isRequired,
  detailData: object,
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
