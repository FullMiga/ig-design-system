import type { Meta, StoryObj } from '@storybook/react-vite';

import type { AvatarProps } from '@ignite-ui/react';
import { Avatar } from '@ignite-ui/react';


const meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  args: {
    src: 'https://github.com/diego-laymi.png/',
    alt: 'Diego Laymi Photo'
  }
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<AvatarProps>;


export const Main: Story = {

};


export const MainWithFallback: Story = {
  args: {
    src: undefined
  }
};