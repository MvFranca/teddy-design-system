import React from "react";
type InputSize = "sm" | "md" | "lg";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputSize?: InputSize;
    fullWidth?: boolean;
}
export declare const Input: ({ inputSize, fullWidth, className, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
