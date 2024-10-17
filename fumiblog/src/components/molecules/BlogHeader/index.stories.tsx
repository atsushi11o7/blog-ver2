import { Meta, StoryObj } from '@storybook/react';
import BlogHeader from './index'

export default {
    title: 'Molecules/BlogHeader',
    component: BlogHeader,
    args: {
        title: 'サンプルタイトル',
        date: '2023-01-01',
    },
} as Meta;
  

export const Default: StoryObj<typeof BlogHeader> = {};
