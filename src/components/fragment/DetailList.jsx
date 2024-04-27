import { StyleSheet } from "react-native";
import React from "react";
import DetailItem from "@components/element/DetailItem";
import { array, bool } from "prop-types";
import ScrollContainer from "@containers/ScrollContainer";

const DetailList = ({ listData, showIndicator = true }) => {
  return (
    <ScrollContainer
      scrollContainerStyle={styles.list}
      containerStyle={styles.containerList}
      showIndicator={showIndicator}
    >
      {listData.map((item, index) => (
        <DetailItem key={index.toString()} itemData={item} />
      ))}
    </ScrollContainer>
  );
};

export default DetailList;

DetailList.propTypes = {
  listData: array.isRequired,
  showIndicator: bool,
};

const styles = StyleSheet.create({
  list: {
    gap: 14,
    marginRight: 5,
  },
  containerList: {
    marginBottom: 20,
    flex: 1,
  },
});
