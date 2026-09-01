import type { Metadata } from "next";
import Link from "next/link";
import { LeadLine } from "@/components/lead-line";
import { Button } from "@/components/ui/button";
import { copy, site } from "@/data/site";
import { processSteps } from "@/data/works";

export const metadata: Metadata = {
  title: "El oficio",
};

export default function OficioPage() {
  const page = copy.oficio;

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
          {site.artist}. {page.lead}
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-xl bg-elevated">
          <img
            src="/taller/corte.jpg"
            alt="Manos cortando vidrio de color sobre el banco de trabajo"
            className="aspect-[3/2] w-full object-cover"
          />
          <figcaption className="px-5 py-4 text-sm text-muted">
            {page.corteCaption}
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl bg-elevated">
          <img
            src="/taller/emplomado.jpg"
            alt="Panel de vitral en proceso de emplomado sobre el banco"
            className="aspect-[3/2] w-full object-cover"
          />
          <figcaption className="px-5 py-4 text-sm text-muted">
            {page.emplomadoCaption}
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
          {page.essayTitle}
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
          {page.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      <LeadLine className="mx-auto max-w-6xl px-5 sm:px-8" />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-3xl tracking-tight">{page.pathTitle}</h2>
        <ol className="mt-10 space-y-8">
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="grid gap-3 border-t border-border pt-8 sm:grid-cols-[5rem_1fr_1.4fr] sm:gap-8"
            >
              <p className="font-display text-3xl text-came">{step.n}</p>
              <h3 className="font-display text-2xl tracking-tight">{step.title}</h3>
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