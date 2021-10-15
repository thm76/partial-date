import { styled } from "solid-styled-components";
import { DateInputProps } from "../models/DateInputProps";
import { Component } from "solid-js";

export const OuterWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
export const InnerWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 0.25rem;
`;
export const Message = styled("p")`
  padding: 0 0.625rem;
  margin: 0;
  font-size: 0.875rem;
`;
export const InfoMessage = styled(Message)`
  color: var(--input-hint-color);
`;
export const ErrorMessage = styled(Message)`
  color: var(--input-error-color);
`;

export const DateInputMessages: Component<DateInputProps> = (props) => (
  <>
    {props.allowsPartial ? (
      <InfoMessage>
        If the day or day and month are unknown, enter "00" or "XX" instead,
        e.g. XX/05/2012 or 00/00/2012.
      </InfoMessage>
    ) : props.date()?.partial === true ? (
      <ErrorMessage>Partial dates are not allowed.</ErrorMessage>
    ) : null}
    {props.date() && props.date().invalid ? (
      <ErrorMessage>{props.date().error || "Invalid"}</ErrorMessage>
    ) : null}
  </>
);
