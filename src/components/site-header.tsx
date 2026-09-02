"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/utils/data/site";
import { cn } from "../utils/functions";
import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-200 ease-out",
        scrolled
          ? "bg-bg/90 shadow-[var(--shadow-border)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-fg"
          aria-label={`${site.name}, inicio`}
        >
          <Mark className="size-7" />
          <span className="font-display text-xl tracking-tight sm:text-[1.35rem]">
            {site.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                href={item.to}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-150",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={() => router.push("/encargos")}
            className="tu-clase-css"
          >
            Encargar
          </button>
        </nav>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="size-5" strokeWidth={1.75} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/70 data-[state=open]:animate-in" />
            <Dialog.Content
              className={cn(
                "fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-elevated p-6 shadow-[var(--shadow-lift)]",
                "data-[state=open]:animate-in",
              )}
            >
              <div className="mb-8 flex items-center justify-between">
                <Dialog.Title className="font-display text-xl">
                  {site.name}
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="inline-flex size-11 items-center justify-center rounded-md text-fg"
                    aria-label="Cerrar menú"
                  >
                    <X className="size-5" strokeWidth={1.75} />
                  </button>
                </Dialog.Close>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Móvil">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    className="flex min-h-12 items-center rounded-md px-2 text-lg text-fg"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <button
                onClick={() => router.push("/encargos")}
                className="tu-clase-css"
              >
                Encargar una pieza
              </button>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
