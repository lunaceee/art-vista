import { StoryObj, Meta } from "@storybook/react";
import Error from "./error";


const meta = {
    title: "Error",
    component: Error,
    parameters: {
        layout: "centered",
    },
} as Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        error: { name: "Error", message: "An error occurred", digest: undefined },
        reset: () => { },
    },
};