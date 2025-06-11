import type { Meta, StoryObj } from "@storybook/react-vite";

import type { TextAreaProps } from "@ignite-ui/react";
import { Box, Text, TextArea } from "@ignite-ui/react";

const meta = {
  title: "Form/Textarea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm" css={{ color: "$white" }}>
            Observations
          </Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export default meta;
type Story = StoryObj<TextAreaProps>;

export const Primary: Story = {
  args: {
    placeholder: "Enter your name",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
