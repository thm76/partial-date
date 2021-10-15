import { Component, createEffect, createSignal } from "solid-js";
import { DateInputProps } from "../models/DateInputProps";
import {
  DateInputMessages,
  InnerWrapper,
  OuterWrapper,
} from "./DateInput+Shared";
import { useFieldId } from "../components/Field";
import { Input } from "../components/Input";
import { formatPartialDatePart } from "../utils/formatPartialDate";
import { validatePartialDate } from "../utils/validatePartialDate";
import { parsePartialDateInput } from "../utils/parsePartialDateInput";

export const DateInputSeparate: Component<DateInputProps> = (props) => {
  const [day, setDay] = createSignal<string>();
  const [month, setMonth] = createSignal<string>();
  const [year, setYear] = createSignal<string>();

  let monthRef: HTMLInputElement;
  let yearRef: HTMLInputElement;

  createEffect(() => {
    if (props.date() !== undefined) {
      setDay(() => formatPartialDatePart(props.date().day, 2, false));
      setMonth(() => formatPartialDatePart(props.date().month, 2, false));
      setYear(() => formatPartialDatePart(props.date().year, 4, false));
    }
  });

  let onBlurTimeout;
  const delayedOnBlur = () => {
    clearTimeout(onBlurTimeout);
    onBlurTimeout = setTimeout(onBlur, 0);
  };
  const onFocus = () => {
    clearTimeout(onBlurTimeout);
  };
  const onBlur = () => {
    const date = validatePartialDate(
      parsePartialDateInput([day(), month(), year()].join("/"))
    );
    props.setDate(date);
    setDay(() => formatPartialDatePart(date.day, 2, false));
    setMonth(() => formatPartialDatePart(date.month, 2, false));
    setYear(() => formatPartialDatePart(date.year, 4, false));
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Input
          id={useFieldId()}
          placeholder="DD"
          style={{ width: "6ch" }}
          maxlength={2}
          value={day()}
          onInput={(e) => {
            setDay(e.currentTarget.value);
            if (e.currentTarget.value.length === 2) {
              monthRef.focus();
              monthRef.select();
            }
          }}
          aria-invalid={props.date()?.invalid}
          onFocus={onFocus}
          onBlur={delayedOnBlur}
        />
        <Input
          id={useFieldId() + "-m"}
          ref={monthRef}
          placeholder="MM"
          style={{ width: "6ch" }}
          maxlength={2}
          value={month()}
          onInput={(e) => {
            setMonth(e.currentTarget.value);
            if (e.currentTarget.value.length === 2) {
              yearRef.focus();
              yearRef.select();
            }
          }}
          aria-invalid={props.date()?.invalid}
          onFocus={onFocus}
          onBlur={delayedOnBlur}
        />
        <Input
          id={useFieldId() + "-y"}
          ref={yearRef}
          placeholder="YYYY"
          style={{ width: "8ch" }}
          maxlength={4}
          value={year()}
          onInput={(e) => {
            setYear(e.currentTarget.value);
          }}
          aria-invalid={props.date()?.invalid}
          onFocus={onFocus}
          onBlur={delayedOnBlur}
        />
        {props.children}
      </InnerWrapper>
      <DateInputMessages {...props} />
    </OuterWrapper>
  );
};
