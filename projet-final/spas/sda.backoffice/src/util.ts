import { format } from "date-fns";

export const formatStringDate = (
  stringDate: string | null | undefined
): string => {
  if (!stringDate) return "-";
  return format(new Date(stringDate), "dd/MM/yyyy kk:mm");
};
