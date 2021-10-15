import { Component, createEffect, createSignal } from "solid-js";
import { DateInputProps } from "../models/DateInputProps";
import { Input } from "../components/Input";
import { useFieldId } from "../components/Field";
import { validatePartialDate } from "../utils/validatePartialDate";
import { parsePartialDateInput } from "../utils/parsePartialDateInput";
import { formatPartialDate } from "../utils/formatPartialDate";
import {
  DateInputMessages,
  InnerWrapper,
  OuterWrapper,
} from "./DateInput+Shared";

export const DateInputCombined: Component<DateInputProps> = (props) => {
  const [displayValue, setDisplayValue] = createSignal<string>();

  createEffect(() => {
    if (props.date() !== undefined) {
      setDisplayValue((prev) => formatPartialDate(props.date(), prev));
    }
  });

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Input
          id={useFieldId()}
          placeholder="DD/MM/YYYY"
          style={{ width: "14ch" }}
          maxlength={12}
          value={displayValue()}
          onInput={(e) => {
            setDisplayValue(e.currentTarget.value);
          }}
          aria-invalid={props.date()?.invalid}
          onBlur={(e) => {
            const date = validatePartialDate(
              parsePartialDateInput(e.currentTarget.value)
            );
            props.setDate(date);
            setDisplayValue((prev) => formatPartialDate(date, prev));
          }}
        />
        {props.children}
      </InnerWrapper>
      <DateInputMessages {...props} />
    </OuterWrapper>
  );
};
