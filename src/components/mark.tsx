import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-came", className)}
      fill="none"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="25" height="25" stroke="currentColor" strokeWidth="1.25" />
      <path d="M16 3.5 L28.5 16 L16 28.5 L3.5 16 Z" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}
