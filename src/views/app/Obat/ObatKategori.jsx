import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { obatKategoriHeader } from "@utils/constant/pageHeader";
import useObatKategoriController from "src/controllers/obatKategoriController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import { obatKategoriData } from "@utils/constant/pageTable";

const ObatKategori = () => {
  const { useGetDrugCategoriesQuery } = useObatKategoriController();

  const { isLoading } = useGetDrugCategoriesQuery();

  return (
    <MainContainer>
      <PageHeader headerData={obatKategoriHeader} />

      {isLoading ? <PageTableSkeleton /> : <PageTable pageData={obatKategoriData} />}
    </MainContainer>
  );
};

export default ObatKategori;
