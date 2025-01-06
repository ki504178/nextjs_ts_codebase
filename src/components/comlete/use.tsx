import type { FC } from "react";
import getButtonClassName from "./buttonCommon";

export const Button: FC = () => (
	<button type="button" className={getButtonClassName("primary")}>
		ボタン
	</button>
);
