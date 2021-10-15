import { Component, createEffect, createSignal } from "solid-js";
import { GlobalStyles } from "./GlobalStyles";
import { styled } from "solid-styled-components";
import { Option } from "./Option";
import { Label } from "./Label";
import { Field } from "./Field";
import { DateInputCombined } from "../options/DateInputCombined";
import { PartialDate } from "../models/PartialDate";
import { DateInputCombinedWithCheckbox } from "../options/DateInputCombinedWithCheckbox";
import { DateInputSeparate } from "../options/DateInputSeparate";
import { DateInputSeparateWithCheckbox } from "../options/DateInputSeparateWithCheckbox";

export const App: Component = () => {
  const [date, setDate] = createSignal<PartialDate>();

  createEffect(() => {
    console.log(date());
  });

  return (
    <Wrapper>
      <h1>Partial Date Input</h1>
      <OptionList>
        <Option title="Single field">
          <Field>
            <Label>Date</Label>
            <DateInputCombined
              date={date}
              setDate={setDate}
              allowsPartial={true}
            />
          </Field>
        </Option>
        <Option title="Single field (no partial dates)">
          <Field>
            <Label>Date</Label>
            <DateInputCombined
              date={date}
              setDate={setDate}
              allowsPartial={false}
            />
          </Field>
        </Option>
        <Option title="Single field with checkbox">
          <Field>
            <Label>Date</Label>
            <DateInputCombinedWithCheckbox date={date} setDate={setDate} />
          </Field>
        </Option>
        <Option title="Separate fields">
          <Field>
            <Label>Date</Label>
            <DateInputSeparate
              date={date}
              setDate={setDate}
              allowsPartial={true}
            />
          </Field>
        </Option>
        <Option title="Separate fields with checkbox">
          <Field>
            <Label>Date</Label>
            <DateInputSeparateWithCheckbox date={date} setDate={setDate} />
          </Field>
        </Option>
      </OptionList>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  width: min(calc(100% - 2rem), 900px);
  margin: 0 auto 2rem;
`;

const OptionList = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
