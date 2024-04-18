import { useCallback, useState } from "react";

const useDatePicker = () => {
  const [showPicker, setShowPicker] = useState(false);

  const openDatePicker = () => {
    setShowPicker(true);
  };

  const closeDatePicker = useCallback(() => {
    setShowPicker(false);
  }, [setShowPicker]);

  const pickDate = useCallback(
    (params, field) => {
      setShowPicker(false);
      field.onChange(params.date);
    },
    [setShowPicker]
  );

  return {
    showPicker,
    openDatePicker,
    closeDatePicker,
    pickDate,
  };
};

export default useDatePicker;
