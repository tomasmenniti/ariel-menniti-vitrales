"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Work } from "@/utils/data/works";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Gallery({
  works,
  featuredOnly = false,
}: {
  works: Work[];
  featuredOnly?: boolean;
}) {
  const items = featuredOnly ? works.filter((w) => w.featured) : works;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? i : (i - 1 + items.length) % items.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {items.map((work, index) => (
          <li
            key={work.id}
            className={cn(
              work.span === "wide" && "sm:col-span-2",
              work.span === "tall" && "lg:row-span-2",
            )}
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-xl bg-elevated text-left shadow-[var(--shadow-border)]"
            >
              <Image
                src={work.image}
                alt={work.title}
                className={cn(
                  "w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]",
                  work.span === "tall"
                    ? "min-h-[22rem] sm:min-h-[28rem]"
                    : "min-h-[14rem] sm:min-h-[18rem]",
                )}
              />
              <span className="block p-4 sm:p-5">
                <span className="block text-xs uppercase tracking-[0.16em] text-came">
                  {work.kind}
                </span>
                <span className="mt-1 block font-display text-2xl tracking-tight text-fg">
                  {work.title}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog.Root
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/85" />
          <Dialog.Content className="fixed inset-3 z-50 flex flex-col overflow-hidden rounded-xl bg-elevated shadow-[var(--shadow-lift)] outline-none sm:inset-8">
            {current ? (
              <>
                <div className="relative min-h-0 flex-1 bg-bg">
                  <Image
                    src={current.image}
                    alt={current.title}
                    className="h-full w-full object-contain"
                  />
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-md bg-bg/70 text-fg"
                      aria-label="Cerrar"
                    >
                      <X className="size-5" />
                    </button>
                  </Dialog.Close>
                  {items.length > 1 ? (
                    <>
                      <button
                        type="button"
                        className="absolute top-1/2 left-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-md bg-bg/70 text-fg"
                        aria-label="Anterior"
                        onClick={() =>
                          setActive((i) =>
                            i === null
                              ? 0
                              : (i - 1 + items.length) % items.length,
                          )
                        }
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        type="button"
                        className="absolute top-1/2 right-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-md bg-bg/70 text-fg"
                        aria-label="Siguiente"
                        onClick={() =>
                          setActive((i) =>
                            i === null ? 0 : (i + 1) % items.length,
                          )
                        }
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </>
                  ) : null}
                </div>
                <div className="border-t border-border px-5 py-4 sm:px-8">
                  <Dialog.Title className="font-display text-2xl tracking-tight">
                    {current.title}
                  </Dialog.Title>
                  <Dialog.Description className="mt-1 text-sm text-muted">
                    {current.kind} · {current.technique}
                  </Dialog.Description>
                  <a
                    href={current.use}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-blue-600 underline decoration-blue-600/40 underline-offset-2 transition-colors hover:text-blue-800"
                  >
                    {current.use}
                  </a>
                </div>
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
