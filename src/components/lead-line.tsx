import { cn } from "@/lib/utils";

export function LeadLine({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative h-px w-full bg-border", className)}
      aria-hidden="true"
    >
      <span className="absolute top-1/2 left-0 size-1.5 -translate-y-1/2 bg-came/70" />
      <span className="absolute top-1/2 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 bg-came/70" />
      <span className="absolute top-1/2 right-0 size-1.5 -translate-y-1/2 bg-came/70" />
    </div>
  );
}
