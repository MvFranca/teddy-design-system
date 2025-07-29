import React, { useState } from "react";
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
  sm: "h-[40px] px-4 text-sm sm:text-base",
  md: "h-[50px] px-6 text-base sm:text-lg",
  lg: "h-[60px] px-8 text-xl sm:text-2xl",
};

export const Button = ({
  children,
  variant = "solid",
  size = "md",
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const isOutline = variant === "outline";
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = {
    backgroundColor: isHovered
      ? isOutline
        ? colors.primaryMain // hover no outline → preenche
        : "transparent"      // hover no solid → remove preenchimento
      : isOutline
        ? "transparent"
        : colors.primaryMain,

    color: isHovered
      ? isOutline
        ? colors.primaryContrast // outline → texto claro no hover
        : colors.primaryMain     // solid → texto colorido no hover
      : isOutline
        ? colors.primaryMain
        : colors.primaryContrast,

    borderColor: colors.primaryMain,
    fontWeight: typography.fontWeightBold,
    borderRadius: "4px",
    opacity: disabled ? colors.disabledOpacity : 1,
    transition: "all 0.2s ease-in-out",
  };

  return (
    <button
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      className={clsx(
        "rounded-[4px] font-medium border-2 cursor-pointer",
        sizeClasses[size],
        fullWidth ? "w-full" : "w-fit",
        className
      )}
      style={baseStyles}
    >
      {children}
    </button>
  );
};
