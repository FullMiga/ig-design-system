import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box, Text } from "@ignite-ui/react";

const meta = {
  title: "Surfeces/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  subcomponents: { Text },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: <Text {...Text.args}> Box</Text>,
  },
};
