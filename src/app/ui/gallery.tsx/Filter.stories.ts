import { StoryObj, Meta } from '@storybook/react';
import Filter from './filter';
import { mockArtworkFilterData } from '@/app/lib/mockArtworkFIlterData';

// Default export for Storybook
const meta = {
    title: 'UI/Gallery/Filter',
    component: Filter,
    layout: 'centered',
    argTypes: {
        onFilterChange: { action: 'filter changed' },
    },
} as Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
    args: {
        filterData: mockArtworkFilterData,
    },
};

Default.parameters = {
    layout: 'centered', // You can use 'centered', 'fullscreen', or 'padded'
};