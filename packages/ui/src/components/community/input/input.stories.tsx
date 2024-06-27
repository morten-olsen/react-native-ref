import React, { useCallback, useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within, expect } from '@storybook/test';
import { CommunityInput } from "./input";
import { Body1 } from "../../../typography/typography";

type Story = StoryObj<typeof CommunityInput>;

export const Empty: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    value: "Hello, world!",
  },
};

export const Interaction: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [submitted, setSubmitted] = useState("");
    const onSend = useCallback(() => {
      setSubmitted(value);
      setValue('');
    }, [value]);
    return (
      <>
        <div style={{ display: 'none' }}>
          <Body1 testID="submitted-text">{submitted}</Body1>
        </div>
        <CommunityInput
          value={value}
          onChange={(e) => setValue(e)}
          onSend={onSend}
        />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitted = canvas.getByTestId('submitted-text');
    const textField = canvas.getByTestId('community-input-text');
    const button = canvas.getByTestId('community-input-button');

    expect(submitted).toHaveTextContent('');
    expect(textField).toHaveValue('');

    await userEvent.type(textField, 'Hey there!');

    expect(submitted).toHaveTextContent('');
    expect(textField).toHaveValue('Hey there!');

    await userEvent.click(button);

    expect(submitted).toHaveTextContent('Hey there!');
    expect(textField).toHaveValue('');
  }
};

export default {
  title: "Components/Community/Input",
  component: CommunityInput,
} as Meta<typeof CommunityInput>;
