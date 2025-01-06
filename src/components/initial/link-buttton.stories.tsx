import type { StoryObj } from "@storybook/react";
import { LinkButton } from "./link-button";

type Story = StoryObj<typeof LinkButton>;

const config = {
	component: LinkButton,
	args: { children: "ボタン", href: "/" },
};
export default config;

export const Default: Story = {};

export const Secondary: Story = {
	args: { color: "secondary" },
};
