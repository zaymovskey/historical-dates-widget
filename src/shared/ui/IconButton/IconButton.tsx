import { cn } from "@/shared/lib";
import styles from "./IconButton.module.scss";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "filled";
  children: ReactNode;
  size?: number;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = "outline", className, children, size = 50, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(styles.root, styles[variant], className)}
        style={{ width: `${size}px`, height: `${size}px` }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
