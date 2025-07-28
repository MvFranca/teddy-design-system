import React from "react";
import clsx from "clsx";
import { colors } from "../../themes/tokens";
type InputSize = "sm" | "md" | "lg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  fullWidth?: boolean;
}

const sizeClasses: Record<InputSize, string> = {
  sm: "h-[40px] text-sm sm:text-base",
  md: "h-[50px] text-base sm:text-lg",
  lg: "h-[60px] text-xl sm:text-2xl",
};

export const Input = ({
  inputSize = "md",
  fullWidth = false,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        "rounded px-4 border-2 outline-none",
        sizeClasses[inputSize],
        fullWidth ? "w-full" : "w-fit",
        className
      )}
      style={{
        backgroundColor: colors.primaryContrast,
        color: colors.textPrimary,
        borderColor: colors.borderDefault,
        opacity: props.disabled ? colors.disabledOpacity : 1,
        borderWidth: "0.125rem",
        borderRadius: "0.25rem",
      }}
    />
  );
};