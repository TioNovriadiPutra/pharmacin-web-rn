import useStokModel from "@models/stokModel";
import { stokData } from "@utils/constant/pageTable";
import { currencyFormatter } from "@utils/helper/currency";
import { handleToast } from "@utils/helper/toast";
import moment from "moment";

const useStokController = () => {
  const { useGetStocks } = useStokModel();

  const useGetStocksQuery = () => {
    const { data, isLoading, isError, error } = useGetStocks();

    if (!isLoading) {
      if (!isError) {
        Object.assign(stokData[0], {
          tableData: data.data.perItem.map((item) => {
            const arr = [item.drug, item.factory_name, item.category_name, currencyFormatter(item.purchase_price), currencyFormatter(item.selling_price), item.total_stock];

            return {
              tables: arr,
            };
          }),
        });

        Object.assign(stokData[1], {
          tableData: data.data.perBatch.map((item) => {
            const arr = [item.drug, item.factory_name, item.batch_number, moment(item.expired).format("DD-MM-YYYY"), item.total_stock, item.sold_stock, item.active_stock];

            return {
              tables: arr,
            };
          }),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  return {
    useGetStocksQuery,
  };
};

export default useStokController;
