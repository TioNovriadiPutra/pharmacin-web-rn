import { registerTranslation } from "react-native-paper-dates";

registerTranslation("id", {
  save: "Simpan",
  selectSingle: "Pilih tanggal",
  selectMultiple: "Pilih tanggal",
  selectRange: "Pilih periode",
  notAccordingToDateFormat: (inputFormat) =>
    `Format tanggal harus ${inputFormat}`,
  mustBeHigherThan: (date) => `Harus sesudah tanggal ${date}`,
  mustBeLowerThan: (date) => `Harus sebelum tanggal ${date}`,
  mustBeBetween: (startDate, endDate) =>
    `Harus diantara tanggal ${startDate} - ${endDate}`,
  dateIsDisabled: "Hari tidak diperbolehkan",
  previous: "Sebelum",
  next: "Berikutnya",
  typeInDate: "Tulis tanggal",
  pickDateFromCalendar: "Pilih tanggal dari kalender",
  close: "Tutup",
});
