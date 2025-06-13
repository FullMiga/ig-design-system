import type { Meta, StoryObj } from "@storybook/react-vite";

import type { ButtonProps } from "@isz-dsystem/react";
import { Button } from "@isz-dsystem/react";
import { ArrowRight } from "lucide-react";

const meta = {
  title: "Form/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
  subcomponents: { ArrowRight },
} as Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <Button {...Button.args}>
        Next Session <ArrowRight />
      </Button>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
