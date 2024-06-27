import { type Meta, type StoryObj } from "@storybook/react";
import { CommunityMessage } from "./message";

type Story = StoryObj<typeof CommunityMessage>;

export const Message: Story = {
  args: {
    user: {
      name: "User name",
      avatar: "https://via.placeholder.com/300",
    },
    content: "Message content",
    publishedAt: new Date("2021-01-01T00:00:00"),
    liked: false,
  },
};

export default {
  title: "Components/Community/Message",
  component: CommunityMessage,
} as Meta<typeof CommunityMessage>;
