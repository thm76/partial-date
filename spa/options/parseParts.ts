type ParsePartsFn = (input: string) => string[] | undefined;
const parsePartsFns: ParsePartsFn[] = [
  (input) =>
    (input.length === 6 || input.length === 8) && input.indexOf("/") === -1
      ? [input.slice(0, 2), input.slice(2, 4), input.slice(4)]
      : undefined,
  (input) => {
    const matches =
      /^(\d{1,2}|[Xx]{1,2})\/(\d{1,2}|[Xx]{1,2})\/(\d{2}|\d{4})$/.exec(input);
    return matches === null ? undefined : matches.slice(1, 4);
  },
];

export const parseParts: ParsePartsFn = (input: string) =>
  parsePartsFns.reduce((acc: string[] | undefined, cur) => {
    return acc !== undefined ? acc : cur(input);
  }, undefined);
