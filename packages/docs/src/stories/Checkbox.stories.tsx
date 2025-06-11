import type { Meta, StoryObj } from "@storybook/react-vite";

import type { CheckboxProps } from "@ignite-ui/react";
import { Box, Checkbox, Text } from "@ignite-ui/react";

const meta = {
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text size="sm" css={{ color: "$white" }}>
            Accept terms of use
          </Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {};
