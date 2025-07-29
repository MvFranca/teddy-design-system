import React from "react";
import clsx from "clsx";
import { colors } from "../../themes/tokens";

type InputSize = "sm" | "md" | "lg";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  fullWidth?: boolean;
}

const sizeClasses: Record<InputSize, string> = {
  sm: "h-[40px] px-4 text-sm sm:text-base",
  md: "h-[50px] px-6 text-base sm:text-lg",
  lg: "h-[60px] px-8 text-xl sm:text-2xl",
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
        "rounded border-2 outline-none",
        sizeClasses[size],
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
