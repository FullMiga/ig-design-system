import type { Meta, StoryObj } from '@storybook/react-vite';

import type { AvatarProps } from '@isz-dsystem/react';
import { Avatar } from '@isz-dsystem/react';


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