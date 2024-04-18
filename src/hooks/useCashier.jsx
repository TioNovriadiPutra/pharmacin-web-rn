import { pembelianHeaderState } from "@store/atom/pageState";
import { colors } from "@themes/colors";
import { addPurchaseTransactionForm } from "@utils/constant/form";
import { useEffect } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import usePembelianController from "src/controllers/pembelianController";

const useCashier = () => {
  const setPembelianHeader = useSetRecoilState(pembelianHeaderState);

  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: addPurchaseTransactionForm.defaultValues,
  });

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

  const watchPurchaseItems = useWatch({
    control,
    name: "purchaseItems",
  });

  const watchTotalPrice = useWatch({
    control,
    name: "totalPrice",
  });

  const checkCartRow = () => {
    let totalPrice = 0;

    watchPurchaseItems.forEach((item, index) => {
      if (item.drugId) {
        Object.assign(addPurchaseTransactionForm.carts.template[2], {
          readOnly: false,
        });

        if (item.purchasePrice === 0) {
          setValue(`purchaseItems.${index}.purchasePrice`, item.drugId.extra);
        } else {
          if (item.quantity * item.purchasePrice !== item.totalPrice) {
            setValue(
              `purchaseItems.${index}.totalPrice`,
              item.quantity * item.purchasePrice
            );
          }
        }
      }

      totalPrice += item.totalPrice;
    });

    if (totalPrice !== watchTotalPrice) {
      setValue("totalPrice", totalPrice);
    }
  };

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
      setPembelianHeader({
        headerFunction: {
          function: [
            {
              type: "button",
              label: "Batalkan Pembelian",
              color: colors.Danger,
              onPress: () => {
                reset(addPurchaseTransactionForm.defaultValues);
                setPembelianHeader(null);
              },
            },
            {
              type: "button",
              label: "Tambah Pembelian",
              color: colors.Primary,
              onPress: handleSubmit((data) => console.log(data)),
            },
          ],
        },
      });
    }
  }, [watchFactory]);

  useEffect(() => {
    checkCartRow();
  }, [watchPurchaseItems]);

  return {
    control,
    setValue,
    fields,
    watchFactory,
    isLoadingFactories,
    onAdd,
  };
};

export default useCashier;
