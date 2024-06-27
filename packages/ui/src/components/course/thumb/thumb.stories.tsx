import { type Meta, type StoryObj } from "@storybook/react";
import { CourseThumb } from "./thumb";

type Story = StoryObj<typeof CourseThumb>;

export const WithProgress: Story = {
  args: {
    course: {
      title: "Course title",
      cover: "https://via.placeholder.com/300",
      lessions: 10,
      duration: 60,
    },
    progress: {
      percentage: 27,
    },
  },
};

export const WithoutProgress: Story = {
  args: {
    course: {
      title: "Course title",
      cover: "https://via.placeholder.com/300",
      lessions: 10,
      duration: 60,
    },
  },
};

export const Bookmarked: Story = {
  args: {
    course: {
      title: "Course title",
      cover: "https://via.placeholder.com/300",
      lessions: 10,
      duration: 60,
    },
    bookmarked: true,
  },
};

export default {
  title: "Components/Course/Thumb",
  component: CourseThumb,
} as Meta<typeof CourseThumb>;
