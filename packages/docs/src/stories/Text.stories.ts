import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text, } from '@isz-dsystem/react';


const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Main: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus esse vero mollitia inventore nobis ullam in debitis repellendus molestiae officiis fugiat odit magnam, repudiandae perferendis, consequuntur est ad ea?',
  },
};

export const CustoTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}