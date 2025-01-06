import clsx from "clsx";
import styles from "./button.module.css";

export type ButtonColor = "primary" | "secondary";

const getButtonClassName = (color: ButtonColor) =>
	clsx(styles.button, styles[color]);

export default getButtonClassName;
