import { cn } from "@/shared/lib";
import styles from "./IconButton.module.scss";
import { ReactNode } from "react";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "outline" | "filled";
  children: ReactNode;
}

export function IconButton({
  variant = "outline",
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(styles.root, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
