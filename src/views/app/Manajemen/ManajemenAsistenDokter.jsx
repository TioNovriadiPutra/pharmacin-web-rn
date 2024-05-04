import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { manajemenAsistenDokterHeader } from "@utils/constant/pageHeader";
import useAsistenDokterController from "@controllers/asistenDokterController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import { manajemenAsistenDokterData } from "@utils/constant/pageTable";

const ManajemenAsistenDokter = () => {
  const { useGetDoctorAssistantsQuery } = useAsistenDokterController();

  const { isLoading } = useGetDoctorAssistantsQuery();

  return (
    <MainContainer>
      <PageHeader headerData={manajemenAsistenDokterHeader} />

      {isLoading ? <PageTableSkeleton /> : <PageTable pageData={manajemenAsistenDokterData} />}
    </MainContainer>
  );
};

export default ManajemenAsistenDokter;
