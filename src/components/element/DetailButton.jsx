import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { object } from "prop-types";
import { useSetRecoilState } from "recoil";
import { detailDataState, showDetailModalState } from "@store/atom/detailState";

const DetailButton = ({ detailData }) => {
  const setShowDetailModal = useSetRecoilState(showDetailModalState);
  const setDetailData = useSetRecoilState(detailDataState);

  const handlePress = () => {
    setShowDetailModal(true);
    setDetailData(detailData);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image source={require("@assets/images/detail.png")} />
    </Pressable>
  );
};

export default DetailButton;

DetailButton.propTypes = {
  detailData: object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 14,
  },
});
