import {
	type ComponentPropsWithoutRef,
	type ElementType,
	type ForwardedRef,
	forwardRef,
} from "react";
import getButtonClassName, { type ButtonColor } from "./buttonCommon";

type ThemeProps = {
	color?: ButtonColor;
};

type DistributiveOmit<T, K extends keyof T> = T extends unknown
	? Omit<T, K>
	: never;

type As<T extends ElementType = ElementType> = { tag?: T };

type PolymorphicProps<E extends ElementType, P> = As<E> &
	P &
	DistributiveOmit<ComponentPropsWithoutRef<E>, keyof P | "tag">;

type Props<E extends ElementType = "button"> = PolymorphicProps<E, ThemeProps>;

export const Button = forwardRef(function button<
	E extends ElementType = "button",
>(
	{
		tag,
		color = "primary",
		type = "primary",
		children,
		disabled,
		...props
	}: Props<E>,
	ref: ForwardedRef<ComponentPropsWithoutRef<E>["ref"]>,
) {
	const Tag = tag || "button";

	return (
		<Tag
			ref={ref}
			{...((!tag || tag === "button") && { type: "button", disabled })}
			{...props}
			className={getButtonClassName(color)}
		>
			{children}
		</Tag>
	);
});
