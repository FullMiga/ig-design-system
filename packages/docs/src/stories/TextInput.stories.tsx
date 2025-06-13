import type { Meta, StoryObj } from "@storybook/react-vite";

import type { TextInputProps } from "@isz-dsystem/react";
import { Box, Text, TextInput } from "@isz-dsystem/react";

const meta = {
  title: "Form/Text Input",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: "flex", flexDirection: "column" }}>
          <Text size="sm" css={{ color: "white" }}>
            E-mail
          </Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export default meta;
type Story = StoryObj<TextInputProps>;

export const Primary: Story = {
  args: {
    placeholder: "Enter your name",
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: "cal.com/",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
