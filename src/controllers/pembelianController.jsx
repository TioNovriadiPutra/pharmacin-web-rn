import usePembelianModel from "@models/pembelianModel";
import { addPurchaseTransactionForm } from "@utils/constant/form";

const usePembelianController = () => {
  const { getPurchaseDrugFactoriesDropdown } = usePembelianModel();

  const getPurchaseDrugFactoriesDropdownQuery = () => {
    const { data, isLoading, isError } = getPurchaseDrugFactoriesDropdown();

    if (!isLoading) {
      if (!isError) {
        Object.assign(addPurchaseTransactionForm, {
          inputs1: addPurchaseTransactionForm.inputs1.map((input) => {
            if (input.name === "factoryId") {
              Object.assign(input, {
                items: data.data.map((tmp) => {
                  return {
                    label: tmp.factory_name,
                    value: tmp.id,
                  };
                }),
              });
            }

            return input;
          }),
        });
      }
    }

    return {
      isLoading,
    };
  };

  return {
    getPurchaseDrugFactoriesDropdownQuery,
  };
};

export default usePembelianController;
