import React from "react";
import styled from "styled-components/native";
import type { Theme } from "../../../theme/theme.types";

interface CaruselProps<T> {
  items: T[];
  getKey: (item: T, index: number) => string;
  renderItem: (item: T) => React.ReactNode;
}

const Scroll = styled.ScrollView`
  flex-grow: 0;
`;

const Wrapper = styled.View<{ theme: Theme }>`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.margins.small}px;
  padding: ${({ theme }) => theme.margins.small}px;
`;

// eslint-disable-next-line react/function-component-definition
function Carusel<T>({ items, getKey, renderItem }: CaruselProps<T>) {
  return (
    <Scroll horizontal>
      <Wrapper>
        {items.map((item, index) => (
          <React.Fragment key={getKey(item, index)}>
            {renderItem(item)}
          </React.Fragment>
        ))}
      </Wrapper>
    </Scroll>
  );
}

export { Carusel, type CaruselProps };
