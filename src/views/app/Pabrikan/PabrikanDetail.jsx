import React from "react";
import MainContainer from "@containers/MainContainer";
import usePabrikanController from "src/controllers/pabrikanController";
import { unhashId } from "@utils/helper/hash";
import DetailHeaderSkeleton from "@components/skeleton/DetailHeaderSkeleton";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import DetailHeader from "@components/layout/DetailHeader";
import { pabrikanDetail } from "@utils/constant/pageDetail";
import PageTable from "@components/layout/PageTable";

const PabrikanDetail = ({ route }) => {
  const { id } = route.params;

  const { useGetDrugFactoryDetailQuery } = usePabrikanController();

  const { isLoading } = useGetDrugFactoryDetailQuery(unhashId(id));

  return (
    <MainContainer>
      {isLoading ? <DetailHeaderSkeleton /> : <DetailHeader headerTitle={pabrikanDetail.title} detailData={pabrikanDetail.detailData} />}

      {isLoading ? <PageTableSkeleton /> : <PageTable pageData={pabrikanDetail} />}
    </MainContainer>
  );
};

export default PabrikanDetail;
