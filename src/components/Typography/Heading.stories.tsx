import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Use `Heading` to render H1 to H6 elements with proper font sizes and weights.",
      },
    },
  },
  argTypes: {
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
      description: "Heading level (H1 - H6)",
    },
    children: {
      control: "text",
      description: "Heading content",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    level: 1,
    children: "This is a Heading H1",
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: "This is a Heading H2",
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: "This is a Heading H3",
  },
};

export const H4: Story = {
  args: {
    level: 4,
    children: "This is a Heading H4",
  },
};

export const H5: Story = {
  args: {
    level: 5,
    children: "This is a Heading H5",
  },
};

export const H6: Story = {
  args: {
    level: 6,
    children: "This is a Heading H6",
  },
};
