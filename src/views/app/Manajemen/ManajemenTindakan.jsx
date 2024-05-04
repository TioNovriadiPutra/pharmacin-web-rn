import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { manajemenTindakanHeader } from "@utils/constant/pageHeader";
import PageTable from "@components/layout/PageTable";
import { manajemenTindakanData } from "@utils/constant/pageTable";
import useTindakanController from "@controllers/tindakanController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";

const ManajemenTindakan = () => {
  const { useGetActionsQuery } = useTindakanController();

  const { isLoading } = useGetActionsQuery();

  return (
    <MainContainer>
      <PageHeader headerData={manajemenTindakanHeader} />

      {isLoading ? <PageTableSkeleton /> : <PageTable pageData={manajemenTindakanData} />}
    </MainContainer>
  );
};

export default ManajemenTindakan;
