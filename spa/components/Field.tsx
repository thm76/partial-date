import { Component, createContext, useContext } from "solid-js";
import { styled } from "solid-styled-components";
import { v4 as createId } from "uuid";
import { NarrowWidth } from "./GlobalStyles";

const FieldContext = createContext("UNDEFINED");
export const Field: Component = (props) => {
  return (
    <Wrapper>
      <FieldContext.Provider value={createId()} children={props.children} />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  align-items: baseline;
  gap: 0.625rem;

  @media (max-width: ${NarrowWidth}px) {
    flex-direction: column;
    gap: 0.25rem;
  }

  > * {
    flex: 1 1 auto;
  }

  > label {
    flex: 0 0 20%;
  }
`;

export const useFieldId = () => useContext(FieldContext);
