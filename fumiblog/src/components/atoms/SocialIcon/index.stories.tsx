import { Meta, StoryObj } from '@storybook/react';
import SocialIcon from './index'

export default {
    title: 'Atoms/SocialIcon',
    component: SocialIcon,
} as Meta;
  

export const Default: StoryObj<typeof SocialIcon> = {};

export const x: StoryObj<typeof SocialIcon> = {
    args: {
        size: 24,
        type: "x",
        color: "#707070",
    }
};

export const github: StoryObj<typeof SocialIcon> = {
    args: {
        size: 24,
        type: "github",
        color: "#707070",
    }
};