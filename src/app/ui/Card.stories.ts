import { StoryObj, Meta } from '@storybook/react';
import Card from './Card';
import { fn } from '@storybook/test';

const meta = {
    title: 'Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        source: 'https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg',
        title: 'Starry Night and the Astronauts',
        artist: 'Alma Thomas',
    },
};

export const WithoutArtist: Story = {
    args: {
        source: 'https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/1686,/0/default.jpg',
        title: 'Paris Street; Rainy Day',
    },
};