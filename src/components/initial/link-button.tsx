import clsx from "clsx";
import {
	type ComponentPropsWithoutRef,
	type ReactNode,
	forwardRef,
} from "react";
import styles from "./button.module.css";
import getButtonClassName, { type ButtonColor } from "./buttonCommon";

type Props = {
	children: ReactNode;
	color?: ButtonColor;
	href: string;
} & ComponentPropsWithoutRef<"a">;

export const LinkButton = forwardRef<HTMLAnchorElement, Props>(function button(
	{ children, href, color = "primary", ...props },
	ref,
) {
	return (
		<a ref={ref} href={href} className={getButtonClassName(color)}>
			{children}
		</a>
	);
});
