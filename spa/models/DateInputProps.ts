import { Accessor, Setter } from "solid-js";
import { PartialDate } from "./PartialDate";

export type DateInputProps = {
  date: Accessor<PartialDate>;
  setDate: Setter<PartialDate>;
  allowsPartial?: boolean;
};
