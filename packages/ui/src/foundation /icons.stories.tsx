import React from "react";
import { type Meta } from "@storybook/react";
import styled from "styled-components";
import { Icon } from "../components/base/icon/icon";
import { icons } from "feather-icons";

const Table = styled.div`
  background: white;
  border-radius: 5px;
  width: 100%;
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Row = styled.div`
  padding: 35px;
  &:nth-child(even) {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Name = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const Icons = () => {
  return (
    <Table>
      {Object.keys(icons).map((key) => {
        return (
          <Row key={key}>
            <Icon name={key as keyof typeof icons} size={120} />
            <Name>{key}</Name>
          </Row>
        );
      })}
    </Table>
  );
};

export default {
  title: "Foundation/Icons",
  component: Icons,
} as Meta<typeof Icons>;
