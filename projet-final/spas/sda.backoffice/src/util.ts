import { format } from "date-fns";

const fieldDateFormat = "yyyy-MM-dd";

export const dateToInputDateValue = (value: Date) => {
  return format(value, fieldDateFormat);
};

export const formatStringToDateFormat = (
  stringDate: string,
  formatString: string
): string => {
  return format(new Date(stringDate), formatString);
};

export const formatDateToString = (date: Date): string => {
  return format(date, "dd/MM/yyyy");
};

export const formatStringToDate = (stringDate: string): string => {
  return format(stringDate, "dd/MM/yyyy");
};

export const formatNullableStringToDate = (
  stringDate: string | null | undefined
): string => {
  if (!stringDate) return "-";
  return format(stringDate, "dd/MM/yyyy");
};

export const formatStringToDateTime = (stringDate: string): string => {
  return format(stringDate, "dd/MM/yyyy kk:mm");
};

export const formatNullableStringToDateTime = (
  stringDate: string | null | undefined
): string => {
  if (!stringDate) return "-";
  return format(stringDate, "dd/MM/yyyy kk:mm");
};
