import {
  pendaftaranModalData,
  showPendaftaranModalState,
} from "@store/atom/pageState";
import { addPatientQueueForm } from "@utils/constant/form";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

const usePendaftaranModal = () => {
  const [showModal, setShowModal] = useRecoilState(showPendaftaranModalState);
  const [modalData, setModalData] = useRecoilState(pendaftaranModalData);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: addPatientQueueForm.defaultValues,
  });

  const onClose = () => {
    setShowModal(false);
    setModalData({
      fullName: "",
    });
  };

  const onReset = () => {
    reset(addPatientQueueForm.defaultValues);
  };

  const onSubmit = () => {
    handleSubmit((data) => modalData.onPress(data, onReset))();
  };

  return {
    showModal,
    modalData,
    control,
    onClose,
    onSubmit,
  };
};

export default usePendaftaranModal;
