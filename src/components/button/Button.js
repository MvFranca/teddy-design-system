import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { colors, typography } from "../../themes/tokens";
const sizeClasses = {
    sm: "h-[40px] px-4 text-sm sm:text-base",
    md: "h-[50px] px-6 text-base sm:text-lg",
    lg: "h-[60px] px-8 text-xl sm:text-2xl",
};
export const Button = ({ children, variant = "solid", size = "md", fullWidth = false, className, ...props }) => {
    const isOutline = variant === "outline";
    return (_jsx("button", { ...props, className: clsx("rounded-[4px] font-medium border-2", sizeClasses[size], fullWidth ? "w-full" : "w-fit", className), style: {
            backgroundColor: isOutline ? "transparent" : colors.primaryMain,
            color: isOutline ? colors.primaryMain : colors.primaryContrast,
            fontWeight: typography.fontWeightBold,
            borderColor: colors.primaryMain,
            borderRadius: '4px',
            opacity: props.disabled ? colors.disabledOpacity : 1,
        }, children: children }));
};
