import { addPurchaseTransactionForm } from "@utils/constant/form";
import { useEffect } from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import usePembelianController from "src/controllers/pembelianController";

const useCashier = (control) => {
  const { fields, append, remove } = useFieldArray({
    name: "purchaseItems",
    control,
  });

  const { useGetPurchaseDrugFactoriesDropdownQuery, getPurchaseDrugsDropdown } =
    usePembelianController();

  const { isLoadingFactories } = useGetPurchaseDrugFactoriesDropdownQuery();

  const watchFactory = useWatch({
    control,
    name: "factoryId",
  });

  const onAdd = () => {
    append(addPurchaseTransactionForm.carts.defaultValues);
  };

  const onDelete = (index) => {
    remove(index);
  };

  useEffect(() => {
    Object.assign(addPurchaseTransactionForm.carts.actions[0], {
      onPress: (index) => onDelete(index),
    });
  }, []);

  useEffect(() => {
    if (watchFactory) {
      getPurchaseDrugsDropdown(watchFactory.value);
    }
  }, [watchFactory]);

  return {
    fields,
    watchFactory,
    isLoadingFactories,
    onAdd,
  };
};

export default useCashier;
