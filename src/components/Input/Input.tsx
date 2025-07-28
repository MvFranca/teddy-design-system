import React from "react";
import clsx from "clsx";
import { colors } from "../../themes/tokens";
type InputSize = "sm" | "md" | "lg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  fullWidth?: boolean;
}

const sizeClasses: Record<InputSize, string> = {
  sm: "h-[40px] text-sm",
  md: "h-[50px] text-base",
  lg: "h-[60px] text-2xl",
};

export const Input = ({
  size = "md",
  fullWidth = false,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        "rounded-[4px] px-4 border-[2px] outline-none",
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className
      )}
      style={{
        borderColor: colors.borderDefault,
        borderWidth: '0.125rem',
        borderRadius: '0.25rem',
        backgroundColor: colors.primaryContrast,
        color: colors.textPrimary,
        padding: "16px 20px"
      }}
    />
  );
};
