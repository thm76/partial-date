import { PartialDate } from "../models/PartialDate";
import { Maybe } from "../models/Maybe";
import { parse } from "date-fns";

export const parsePartialDateInput = (input: string): PartialDate => {
  input = input.trim();
  const parts: Maybe<string[]> = parsePartsFns.reduce(
    (acc: Maybe<string[]>, cur) => {
      return acc !== undefined ? acc : cur(input);
    },
    undefined
  );

  if (parts === undefined || parts.length !== 3) {
    return {};
  }

  const day = /^\d+$/.test(parts[0]) ? parseInt(parts[0], 10) : undefined;
  const month = /^\d+$/.test(parts[1]) ? parseInt(parts[1], 10) : undefined;
  const year = parse(
    parts[2],
    parts[2].length === 2 ? "yy" : "yyyy",
    new Date()
  ).getFullYear();

  return {
    day: day === 0 ? undefined : day,
    month: month === 0 ? undefined : month,
    year,
  };
};

type ParsePartsFn = (input: string) => string[] | undefined;
const parsePartsFns: ParsePartsFn[] = [
  (input) => (/^\d{2,4}$/.test(input) ? ["", "", input] : undefined),
  (input) =>
    (input.length === 6 || input.length === 8) && input.indexOf("/") === -1
      ? [input.slice(0, 2), input.slice(2, 4), input.slice(4)]
      : undefined,
  (input) => {
    const matches =
      /^(\d{1,2}|[Xx]{1,2})?\/(\d{1,2}|[Xx]{1,2})?\/(\d{1,2}|\d{4})$/.exec(
        input
      );
    return matches === null ? undefined : matches.slice(1, 4);
  },
];
