import { StoryObj, Meta } from '@storybook/react';
import { CardsSkeleton } from '@/app/ui/skeletons';

const meta = {
    title: 'CardsSkeleton',
    component: CardsSkeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CardsSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 300,
        height: 400,
    },
};
