import { useRecoilState } from "recoil";
import { rowIdState, showValidationModalState } from "@store/atom/pageState";

const useValidationModal = () => {
  const [showModal, setShowModal] = useRecoilState(showValidationModalState);
  const [rowId, setRowId] = useRecoilState(rowIdState);

  const closeModal = () => {
    setShowModal(false);
    setRowId(null);
  };

  const agree = () => {
    if (rowId.type === "delete") {
      rowId.onDelete();
    } else {
      rowId.onSubmit();
    }
  };

  return {
    showModal,
    closeModal,
    agree,
    rowId,
  };
};

export default useValidationModal;
