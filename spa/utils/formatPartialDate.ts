import { PartialDate } from "../models/PartialDate";
import { Maybe } from "../models/Maybe";

export const formatPartialDatePart = (
  part: Maybe<number>,
  minLength = 2,
  undefinedAsX = true
) =>
  part === undefined
    ? undefinedAsX
      ? "".padStart(minLength, "X")
      : ""
    : `${part}`.padStart(minLength, "0");

export const formatPartialDate = (
  date: PartialDate,
  fallback: string = ""
): string => {
  const { day, month, year } = date || {};
  if (day === undefined && month === undefined && year === undefined) {
    return fallback;
  }

  return [
    formatPartialDatePart(day),
    formatPartialDatePart(month),
    formatPartialDatePart(year, 4),
  ].join("/");
};
