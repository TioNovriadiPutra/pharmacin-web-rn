import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { obatRacikanHeader } from "@utils/constant/pageHeader";

const ObatRacikan = () => {
  return (
    <MainContainer>
      <PageHeader headerData={obatRacikanHeader} />
    </MainContainer>
  );
};

export default ObatRacikan;

const styles = StyleSheet.create({});
