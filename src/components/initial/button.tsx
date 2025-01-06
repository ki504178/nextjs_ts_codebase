import {
	type ComponentPropsWithoutRef,
	type ReactNode,
	forwardRef,
} from "react";
import getButtonClassName, { type ButtonColor } from "./buttonCommon";

type Props = {
	children: ReactNode;
	color?: ButtonColor;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, Props>(function button(
	{ children, type = "button", color = "primary", ...props },
	ref,
) {
	return (
		<button ref={ref} type={type} className={getButtonClassName(color)}>
			{children}
		</button>
	);
});
