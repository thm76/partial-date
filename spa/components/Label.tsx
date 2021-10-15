import { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";
import { useFieldId } from "./Field";
import { NarrowWidth } from "./GlobalStyles";

export const Label: Component<JSX.LabelHTMLAttributes<HTMLLabelElement>> = (
  props
) => <Wrapper for={useFieldId()} {...props} />;

const Wrapper = styled("label")`
  font-weight: 600;

  @media (min-width: ${NarrowWidth + 1}px) {
    text-align: right;
    &:after {
      content: ":";
    }
  }
`;
