import { Component, createSignal } from "solid-js";
import { DateInputProps } from "../models/DateInputProps";
import { useFieldId } from "../components/Field";
import { DateInputSeparate } from "./DateInputSeparate";

export const DateInputSeparateWithCheckbox: Component<DateInputProps> = (
  props
) => {
  const id = `${useFieldId()}-c`;
  const [allowsPartial, setAllowsPartial] = createSignal<boolean>(false);
  return (
    <DateInputSeparate {...props} allowsPartial={allowsPartial()}>
      <input
        id={id}
        type="checkbox"
        checked={allowsPartial()}
        onChange={(e) => setAllowsPartial((prev) => !prev)}
      />
      <label for={id}>Partial date</label>
    </DateInputSeparate>
  );
};
