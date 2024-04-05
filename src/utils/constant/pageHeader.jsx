import { formDataState } from "@store/atom/formState";
import { showFormModalState } from "@store/atom/pageState";
import { colors } from "@themes/colors";
import { setRecoil } from "recoil-nexus";
import { addDrugFactoryForm } from "./form";

export const pabrikanHeader = {
  headerTitle: {
    title: "Pabrikan",
    subTitle: "/ Kelola Pabrik",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Pabrikan",
        color: colors.Primary,
        onPress: () => {
          setRecoil(showFormModalState, true);
          setRecoil(formDataState, addDrugFactoryForm);
        },
      },
      {
        type: "search",
        name: "searchPabrikan",
      },
    ],
    defaultValues: {
      searchPabrikan: "",
    },
  },
};
