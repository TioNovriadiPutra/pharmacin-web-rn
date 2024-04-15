import { purchaseTransactionCartsState } from "@store/atom/formState";
import { useFieldArray, useWatch } from "react-hook-form";
import { useRecoilValue } from "recoil";
import usePembelianController from "src/controllers/pembelianController";

const useCashier = (name, control) => {
  const shoppingCartInputs = useRecoilValue(purchaseTransactionCartsState);

  const { fields, append } = useFieldArray({
    name: name,
    control,
  });

  const { getPurchaseDrugFactoriesDropdownQuery } = usePembelianController();

  const { isLoading } = getPurchaseDrugFactoriesDropdownQuery();

  const watchFactory = useWatch({
    control,
    name: "factoryId",
  });

  return {
    shoppingCartInputs,
    append,
    watchFactory,
    isLoading,
  };
};

export default useCashier;
