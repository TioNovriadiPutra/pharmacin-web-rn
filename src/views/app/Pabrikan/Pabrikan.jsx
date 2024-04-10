import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { pabrikanHeader } from "@utils/constant/pageHeader";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import usePabrikanController from "src/controllers/pabrikanController";
import PageTable from "@components/layout/PageTable";
import { pabrikanData } from "@utils/constant/pageTable";

const Pabrikan = () => {
  const { useGetDrugFactoriesQuery } = usePabrikanController();

  const { isLoading } = useGetDrugFactoriesQuery();

  return (
    <MainContainer>
      <PageHeader headerData={pabrikanHeader} />

      {isLoading ? <PageTableSkeleton /> : <PageTable pageData={pabrikanData} />}
    </MainContainer>
  );
};

export default Pabrikan;
