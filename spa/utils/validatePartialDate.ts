import { parse } from "date-fns";
import { PartialDate } from "../models/PartialDate";

export const validatePartialDate = (partialDate: PartialDate): PartialDate => {
  const { day, month, year } = partialDate;

  // empty
  if (day === undefined && month === undefined && year === undefined) {
    return {
      day,
      month,
      year,
      partial: undefined,
      invalid: partialDate.invalid || undefined,
    };
  }

  const partial =
    day === undefined || month === undefined || year === undefined;

  // no year
  if (year === undefined) {
    return {
      day,
      month,
      year,
      partial,
      invalid: true,
      error: "Year is missing",
    };
  }
  // year
  else {
    if (month === undefined) {
      // year, no month, no day
      if (day === undefined) {
        return { day, month, year, partial, invalid: false };
      }
      // year, no month, day
      else {
        return {
          day,
          month,
          year,
          partial,
          invalid: true,
          error: "Month is required if the day is supplied",
        };
      }
    }
    // year, month
    else {
      // year, month, no day
      if (day === undefined) {
        const invalid = month < 1 || month > 12;
        return {
          day,
          month,
          year,
          partial,
          invalid,
          error: invalid ? "Month is invalid" : undefined,
        };
      }
      // year, month, day
      else {
        const date = parse(`${year}-${month}-${day}`, "yyyy-MM-dd", new Date());
        const invalid = isNaN(date.getTime());
        return {
          day,
          month,
          year,
          partial,
          date,
          invalid,
          error: invalid ? "Invalid date" : undefined,
        };
      }
    }
  }
};
