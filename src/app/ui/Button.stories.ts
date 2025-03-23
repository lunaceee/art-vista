import { StoryObj, Meta } from '@storybook/react';
import Button from './Button';
import { fn } from '@storybook/test';

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LargePrimary: Story = {
    args: {
        children: 'Button',
        size: 'lg',
    },
};

export const MediumPrimary: Story = {
    args: {
        children: 'Button',
    },
};

export const SmallPrimary: Story = {
    args: {
        children: 'Button',
        size: 'sm',
    },
};

export const LargeSecondary: Story = {
    args: {
        children: 'Button',
        size: 'lg',
        variant: 'secondary',
    },
};

export const MediumSecondary: Story = {
    args: {
        children: 'Button',
        variant: 'secondary',
    },
};


export const SmallSecondary: Story = {
    args: {
        children: 'Button',
        size: 'sm',
        variant: 'secondary',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        disabled: true,
    },
};

export const Link: Story = {
    args: {
        children: 'Button',
        type: 'link',
    },
};

export const LinkLarge: Story = {
    args: {
        children: 'Button',
        type: 'link',
        size: 'lg',
    },
};

export const LinkSmall: Story = {
    args: {
        children: 'Button',
        type: 'link',
        size: 'sm',
    },
};

export const LinkDisabled: Story = {
    args: {
        children: 'Button',
        type: 'link',
        disabled: true,
    },
};
