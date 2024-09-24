import { Meta, StoryObj } from '@storybook/react';
import PostCard from './index';

const meta: Meta<typeof PostCard> = {
    title: 'Molecules/PostCard',
    component: PostCard,
  };
  
  export default meta;
  
  type Story = StoryObj<typeof PostCard>;
  
  export const Default: Story = {};