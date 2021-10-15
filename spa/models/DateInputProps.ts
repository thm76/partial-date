import { Accessor, Setter } from "solid-js";
import { PartialDate } from "./PartialDate";

export type DateInputProps = {
  date: Accessor<PartialDate>;
  // date: Maybe<PartialDate>;
  setDate: Setter<PartialDate>;
  allowsPartial?: boolean;
};
