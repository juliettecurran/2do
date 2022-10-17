import React from "react";

export type ButtonProps = {
	// onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
	children?: React.ReactNode; // make the component able to receive children elements
	color?: string; // two styling options (you can create as many as you want)
	// hover?: boolean | false; // to handle hover state
	// disabled?: boolean | false; // make the button disabled or not
};

// const Button = ({
// 	// onClick,
// 	children,
// 	color
// }: // disabled,
// ButtonProps) => {
// 	return (
// 		// <div  color={color} disabled={disabled}>
// 		<div className={color}>{children}</div>
// 	);
// };

export interface ButtonProp {
	children?: React.ReactNode;
	color?: string;
	onClick?: any;
}

const Button: React.FC<ButtonProp> = ({
	onClick,
	children,
	color = "bg-blue-500"
}) => {
	return (
		<button
			className={`${color} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
