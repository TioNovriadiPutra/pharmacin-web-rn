import { getActions } from "@services/tindakan";
import { useQuery } from "react-query";

const useTindakanModel = () => {
  const useGetActions = () => {
    return useQuery({
      queryKey: ["getActions"],
      queryFn: () => getActions(),
    });
  };

  return {
    useGetActions,
  };
};

export default useTindakanModel;
