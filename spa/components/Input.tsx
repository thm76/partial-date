import {styled} from "solid-styled-components"; // type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {

// type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
//     value: Accessor<string>;
//   setValue?: (value: string) => void;
// };
//
// export const Input: Component<InputProps> = (props) => {
//   const { setValue, value, ...otherProps } = props;
//
//   createEffect(() => console.log(`value is ${props.value()}`));
//
//   return (
//     <Wrapper
//       id={useFieldId()}
//       {...otherProps}
//         value={value()}
//       onInput={(e) => {
//         if (typeof props.setValue === "function") {
//           props.setValue(e.currentTarget.value);
//         }
//       }}
//     />
//   );
// };

export const Input = styled("input")`
  padding: 0.625rem;
  border: var(--input-border);
  border-radius: 0.3125rem; /* 5px */
  --shadow-color: hsla(0, 0%, 0%, 0.2);

  color: var(--input-color);
  background: var(--input-background);
  box-shadow: inset 0 1px 4px var(--shadow-color);

  font-size: 1rem;

  &[aria-invalid="true"] {
    outline: var(--outline-color--invalid) solid 1px;
  }

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &:focus,
  &:active {
    outline: var(--outline-color) solid 2px;
    outline-offset: 1px;
    background: var(--input-background--active);

    &[aria-invalid="true"] {
      outline-color: var(--outline-color--invalid);
      background: var(--input-background--active--invalid);
    }
  }
`;
