import { StoryObj, Meta } from "@storybook/react";
import Artwork from "./artwork";

const meta = {
    title: "Artwork",
    component: Artwork,
    parameters: {
        layout: "centered",
    },
} as Meta<typeof Artwork>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        artwork: {
            id: "1",
            title: "Artwork Title",
            artist_title: "Artist Name",
            image_id: "2fa24f36-cc26-41b6-4b49-12bba2a6c1c8",
            description: "Artwork description goes here.",
            place_of_origin: "Japan",
        },
    },
};