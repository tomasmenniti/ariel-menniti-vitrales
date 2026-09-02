import type { LabelHTMLAttributes } from "react";
import { cn } from "../../utils/functions";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-xs font-medium uppercase tracking-[0.16em] text-muted",
        className,
      )}
      {...props}
    />
  );
}
