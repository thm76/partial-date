import { Component } from "solid-js";
import { styled } from "solid-styled-components";

type OptionProps = {
  title: string;
};

export const Option: Component<OptionProps> = (props) => {
  return (
    <Wrapper>
      <Header>
        <h2>{props.title}</h2>
      </Header>
      <main>{props.children}</main>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  padding: 1rem;
  border-radius: 0.5rem;

  background: var(--option-background);
  --shadow-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 1px var(--shadow-color), 0 1px 2px var(--shadow-color),
    0 2px 4px var(--shadow-color), 0 4px 8px var(--shadow-color),
    0 8px 16px var(--shadow-color);

  main {
    min-height: 2rem;
  }
`;

const Header = styled("header")`
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 0.5rem 1rem;
    margin: -1rem -1rem 1rem -1rem;
    border-bottom: solid 1px var(--option-divider-color);
  }
`;
