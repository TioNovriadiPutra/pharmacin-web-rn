import { StyleSheet } from "react-native";
import React from "react";
import ScrollContainer from "@containers/ScrollContainer";
import DrawerItem from "@components/element/DrawerItem";
import { useRecoilValue } from "recoil";
import {
  drawerIndexState,
  drawerSubMenuIndexState,
} from "@store/atom/drawerState";
import { array, func } from "prop-types";

const DrawerList = ({ onNavigate, onSubMenu, drawerData }) => {
  const drawerIndex = useRecoilValue(drawerIndexState);
  const drawerSubMenuIndex = useRecoilValue(drawerSubMenuIndexState);

  return (
    <ScrollContainer
      containerStyle={styles.container}
      scrollContainerStyle={styles.scrollContainer}
    >
      {drawerData.map((drawer, index) => (
        <DrawerItem
          key={index.toString()}
          drawerItemData={drawer}
          onNavigate={onNavigate}
          onSubMenu={() => onSubMenu(index)}
          status={drawerIndex === index + 1}
          subMenuStatus={drawer.subMenu ? drawerSubMenuIndex === index : false}
        />
      ))}
    </ScrollContainer>
  );
};

export default DrawerList;

DrawerList.propTypes = {
  onNavigate: func.isRequired,
  onSubMenu: func.isRequired,
  drawerData: array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    flex: 1,
  },
  scrollContainer: {
    gap: 24,
  },
});
