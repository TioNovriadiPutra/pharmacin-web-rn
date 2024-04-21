import { Dimensions, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { array } from "prop-types";
import PageTable from "./PageTable";
import { useRecoilValue } from "recoil";
import { switchIndexState } from "@store/atom/pageState";

const PageTableSwitch = ({ tableSwitchData }) => {
  const swithIndex = useRecoilValue(switchIndexState);

  const pageRef = useRef(null);

  useEffect(() => {
    pageRef.current.scrollToIndex({ animated: false, index: swithIndex });
  }, [swithIndex]);

  return (
    <FlatList
      ref={pageRef}
      data={tableSwitchData}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <PageTable pageData={item} tableStyle={styles.table} />}
    />
  );
};

export default PageTableSwitch;

PageTableSwitch.propTypes = {
  tableSwitchData: array.isRequired,
};

const styles = StyleSheet.create({
  table: {
    width: Dimensions.get("window").width - 96,
  },
});
