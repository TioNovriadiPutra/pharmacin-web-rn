import { getStocks } from "@services/stok";
import { useQuery } from "react-query";

const useStokModel = () => {
  const useGetStocks = () => {
    return useQuery({
      queryKey: ["getStocks"],
      queryFn: () => getStocks(),
    });
  };

  return {
    useGetStocks,
  };
};

export default useStokModel;
