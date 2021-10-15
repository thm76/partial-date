export type PartialDateOptions = {
  allowsPartial?: boolean;
  yearResolution?: "closest" | "future" | "past";
};

export const DefaultPartialDateOptions: Required<PartialDateOptions> = {
  allowsPartial: true,
  yearResolution: "closest",
};
