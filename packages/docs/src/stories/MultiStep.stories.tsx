import type { Meta, StoryObj } from "@storybook/react-vite";

import type { MultistepProps } from "@isz-dsystem/react";
import { Box, MultiStep, Text } from "@isz-dsystem/react";

const meta = {
  title: "Form/MultiStep",
  component: MultiStep,
  parameters: {
    layout: "centered",
  },
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text css={{ color: "$white" }}>Progress </Text>
          {Story()}
        </Box>
      );
    },
  ],
} satisfies Meta<MultistepProps>;

export default meta;
type Story = StoryObj<MultistepProps>;

export const Main: Story = {};

export const Finished: Story = {
  args: {
    currentStep: 4,
  },
};
