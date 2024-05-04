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
            const arr = [
              { type: "text", value: item.drug },
              { type: "text", value: item.factory_name },
              { type: "text", value: item.category_name },
              { type: "currency", value: item.purchase_price },
              { type: "currency", value: item.selling_price },
              { type: "text", value: item.total_stock },
            ];

            return {
              tables: arr,
            };
          }),
        });

        Object.assign(stokData[1], {
          tableData: data.data.perBatch.map((item) => {
            const arr = [
              { type: "text", value: item.drug },
              { type: "text", value: item.factory_name },
              { type: "text", value: item.batch_number },
              {
                type: "text",
                value: moment(item.expired).format("DD-MM-YYYY"),
              },
              { type: "text", value: item.total_stock },
              { type: "text", value: item.sold_stock },
              { type: "text", value: item.active_stock },
            ];

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
