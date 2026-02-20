import type { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  direction?: "left" | "right";
  width?: number;
}

export function ArrowIcon({
  direction = "right",
  width = 6.25,
  style,
  ...props
}: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 9 14"
      fill="none"
      style={{
        width: `${width}px`,
        height: "auto",
        display: "block",
        transform: direction === "right" ? "rotate(180deg)" : undefined,
        ...style
      }}
      {...props}
    >
      <path
        d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
