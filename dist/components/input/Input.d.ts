import React from "react";
type InputSize = "sm" | "md" | "lg";
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: InputSize;
    fullWidth?: boolean;
}
export declare const Input: ({ size, fullWidth, className, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
