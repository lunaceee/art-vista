import { StoryObj, Meta } from "@storybook/react";
import NotFound from "./not-found";

const meta = {
    title: "NotFound",
    component: NotFound,
    parameters: {
        layout: "centered",
    },
} as Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};