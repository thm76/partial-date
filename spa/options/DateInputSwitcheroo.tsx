import { Component, createSignal, Match, Switch } from "solid-js";
import { DateInputProps } from "../models/DateInputProps";
import { useFieldId } from "../components/Field";
import { DateInputSeparate } from "./DateInputSeparate";
import { DateInputCombined } from "./DateInputCombined";

export const DateInputSwitcheroo: Component<DateInputProps> = (props) => {
  const id = `${useFieldId()}-c`;
  const [allowsPartial, setAllowsPartial] = createSignal<boolean>(false);

  return (
    <Switch>
      <Match when={allowsPartial()}>
        <DateInputSeparate {...props} allowsPartial={allowsPartial()}>
          <input
            id={id}
            type="checkbox"
            checked={allowsPartial()}
            onChange={() => setAllowsPartial((prev) => !prev)}
          />
          <label for={id}>Partial date</label>
        </DateInputSeparate>
      </Match>
      <Match when={!allowsPartial()}>
        <DateInputCombined {...props} allowsPartial={allowsPartial()}>
          <input
            id={id}
            type="checkbox"
            checked={allowsPartial()}
            onChange={() => setAllowsPartial((prev) => !prev)}
          />
          <label for={id}>Partial date</label>
        </DateInputCombined>
      </Match>
    </Switch>
  );
};
