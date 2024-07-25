import { Meta, StoryObj } from '@storybook/react';
import Button from './index'

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        fontSize: { control: 'text' },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset']
        }
    }
} as Meta<typeof Button>;
  
  // デフォルトのストーリー
export const Default: StoryObj<typeof Button> = {
    args: {
        children: 'Click Me',
        type: 'button',
        backgroundColor: '#008CBA',
        color: 'black',
        fontSize: '16px'
    }
};

export const NavButton: StoryObj<typeof Button> = {
    args: {
        children: 'Home',
        type: 'button',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '16px'
    }
};