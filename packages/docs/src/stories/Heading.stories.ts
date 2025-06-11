import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from '@ignite-ui/react';


const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered'
  },
  args: {
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Main: Story = {
  args: {
    children: 'Heading',
  },
};


export const CustomTag: Story = {
  args: {
    children: 'H1 | Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'By default the Heading component is always an `h2` tag, but we can change this with the `as` propertie.'
      }
    }
  }
};