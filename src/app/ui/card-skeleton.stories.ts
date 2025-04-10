import { StoryObj, Meta } from '@storybook/react';
import { CardSkeleton } from '@/app/ui/skeletons';

const meta = {
    title: 'CardSkeleton',
    component: CardSkeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CardSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 300,
        height: 400,
    },
};
