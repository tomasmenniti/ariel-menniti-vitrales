import type { Metadata } from "next";
import Link from "next/link";
import { LeadLine } from "@/components/lead-line";
import { Button } from "@/components/ui/button";
import { StoreGallery } from "@/components/tienda";
import { copy } from "@/data/site";
import { processSteps } from "@/data/works";

export const metadata: Metadata = {
  title: "Tienda",
};

export default function TiendaPage() {
  const page = copy.tienda;

  return (
    <main className="pt-24 sm:pt-28">
      <header className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
          {page.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl tracking-tight sm:text-6xl">
          {page.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {page.lead}
        </p>
      </header>

      {/* Renderizamos la galería extraída */}
      <StoreGallery />

      <div className="h-20"></div>
      <LeadLine className="mx-auto max-w-6xl px-5 sm:px-8" />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-3xl tracking-tight">
          {page.pathTitle}
        </h2>
        <ol className="mt-10 space-y-8">
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="grid gap-3 border-t border-border pt-8 sm:grid-cols-[5rem_1fr_1.4fr] sm:gap-8"
            >
              <p className="font-display text-3xl text-came">{step.n}</p>
              <h3 className="font-display text-2xl tracking-tight">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
        <Button asChild className="mt-12" size="lg">
          <Link href="/encargos">{page.pathCta}</Link>
        </Button>
      </section>
    </main>
  );
}