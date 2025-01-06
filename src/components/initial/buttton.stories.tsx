import type { StoryObj } from "@storybook/react";
import { Button } from "./button";

type Story = StoryObj<typeof Button>;

const config = {
	component: Button,
	args: { children: "ボタン" },
};
export default config;

export const Default: Story = {};

export const Secondary: Story = {
	args: { color: "secondary" },
};
