import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { manajemenAdministratorHeader } from "@utils/constant/pageHeader";
import useUserController from "@controllers/userController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import { manajemenAdministratorData } from "@utils/constant/pageTable";

const ManajemenAdministrator = () => {
  const { useGetAdministratorsQuery } = useUserController();

  const { isLoading } = useGetAdministratorsQuery();

  return (
    <MainContainer>
      <PageHeader headerData={manajemenAdministratorHeader} />

      {isLoading ? <PageTableSkeleton /> : <PageTable pageData={manajemenAdministratorData} />}
    </MainContainer>
  );
};

export default ManajemenAdministrator;
