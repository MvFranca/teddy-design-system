import React from "react";
import clsx from "clsx";
import { colors, typography } from "../../themes/tokens";

type ButtonVariant = "solid" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[40px] text-sm px-4",
  md: "h-[50px] text-base px-6",
  lg: "h-[60px] text-2xl px-8",
};

export const Button = ({
  children,
  variant = "solid",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const isOutline = variant === "outline";

  return (
    <button
      {...props}
      className={clsx(
        "rounded-[4px] font-medium border-2",
        sizeClasses[size],
        fullWidth ? "w-full" : "w-fit",
        className
      )}
      style={{
        backgroundColor: isOutline ? "transparent" : colors.primaryMain,
        color: isOutline ? colors.primaryMain : colors.primaryContrast,
        fontWeight: typography.fontWeightBold,
        borderColor: colors.primaryMain,
        borderRadius: '4px',
        opacity: props.disabled ? colors.disabledOpacity : 1,
      }}
    >
      {children}
    </button>
  );
};
