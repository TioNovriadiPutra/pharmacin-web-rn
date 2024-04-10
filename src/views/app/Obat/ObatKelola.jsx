import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { obatHeader } from "@utils/constant/pageHeader";
import useObatController from "src/controllers/obatController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import { obatData } from "@utils/constant/pageTable";

const ObatKelola = () => {
  const { useGetDrugsQuery } = useObatController();

  const { isLoading } = useGetDrugsQuery();

  return (
    <MainContainer>
      <PageHeader headerData={obatHeader} />

      {isLoading ? <PageTableSkeleton /> : <PageTable pageData={obatData} />}
    </MainContainer>
  );
};

export default ObatKelola;
