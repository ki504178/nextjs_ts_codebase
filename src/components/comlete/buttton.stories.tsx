import type { StoryObj } from "@storybook/react";
import { Button } from "./use";

type Story = StoryObj<typeof Button>;

const config = {
	component: Button,
};
export default config;

export const Default: Story = {};
