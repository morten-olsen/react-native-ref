import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { Carusel } from "./carusel";
import { CourseThumb, type CourseThumbProps } from "../../course/thumb/thumb";

type Story = StoryObj<typeof Carusel<CourseThumbProps>>;

const courses = new Array(10).fill(0).map<CourseThumbProps>((_, i) => ({
  course: {
    id: `${i}`,
    title: `Course ${i}`,
    cover: `https://via.placeholder.com/300?text=Course+${i}`,
    lessions: 10,
    duration: 60,
  },
}));

export const Message: Story = {
  args: {
    items: courses,
    getKey: (item) => item.course.id,
    renderItem: (item) => <CourseThumb course={item.course} />,
  },
};

export default {
  title: "Components/Base/Carusel",
  component: Carusel,
} as Meta<typeof Carusel>;
