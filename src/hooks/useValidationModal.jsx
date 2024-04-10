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
    rowId.onDelete();
  };

  return {
    showModal,
    closeModal,
    agree,
  };
};

export default useValidationModal;
