import { useEffect } from "react";
import { useFieldArray, useWatch } from "react-hook-form";

const useCart = (cartData, control, setValue) => {
  const { fields, append, remove } = useFieldArray({
    name: cartData.name,
    control,
  });

  const watchCart = useWatch({
    control,
    name: cartData.name,
  });

  const onAdd = () => {
    append(cartData.defaultValues);
  };

  const onDelete = (index) => {
    remove(index);
  };

  useEffect(() => {
    Object.assign(cartData.actions[0], {
      onPress: (index) => onDelete(index),
    });
  }, []);

  useEffect(() => {
    cartData.checkRow(watchCart, cartData, setValue);
  }, [watchCart]);

  return {
    fields,
    onAdd,
  };
};

export default useCart;
