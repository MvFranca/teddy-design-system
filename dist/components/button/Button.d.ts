import React from "react";
type ButtonVariant = "solid" | "outline";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
}
export declare const Button: ({ children, variant, size, fullWidth, className, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
