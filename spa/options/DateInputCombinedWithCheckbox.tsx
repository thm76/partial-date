import { Component, createSignal } from "solid-js";
import { DateInputProps } from "../models/DateInputProps";
import { DateInputCombined } from "./DateInputCombined";
import { useFieldId } from "../components/Field";

export const DateInputCombinedWithCheckbox: Component<DateInputProps> = (
  props
) => {
  const id = `${useFieldId()}-c`;
  const [allowsPartial, setAllowsPartial] = createSignal<boolean>(false);
  return (
    <DateInputCombined {...props} allowsPartial={allowsPartial()}>
      <input
        id={id}
        type="checkbox"
        checked={allowsPartial()}
        onChange={() => setAllowsPartial((prev) => !prev)}
      />
      <label for={id}>Partial date</label>
    </DateInputCombined>
  );
};
