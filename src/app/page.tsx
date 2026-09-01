import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactLinks } from "@/components/contact-links";
import { Gallery } from "@/components/gallery";
import { LeadLine } from "@/components/lead-line";
import { Button } from "@/components/ui/button";
import { copy, site } from "@/data/site";
import { processSteps, works } from "@/data/works";

export default function Home() {
  const home = copy.home;

  return (
    <main>
      <section className="pt-20 sm:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <figure className="overflow-hidden rounded-2xl bg-elevated shadow-[var(--shadow-border)] lg:order-2">
            <img
              src={site.portrait}
              alt={site.portraitAlt}
              className="aspect-square w-full object-cover object-top"
            />
          </figure>
          <div className="stagger-in lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-came">
              {site.kicker}
            </p>
            <p className="mt-3 font-display text-2xl tracking-tight text-fg sm:text-3xl">
              {site.name}
            </p>
            <h1 className="mt-4 font-display text-[3.1rem] leading-[0.95] tracking-tight text-fg sm:text-7xl">
              {home.tagline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {home.intro}
            </p>
            <ContactLinks size="lg" className="mt-8" />
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild variant="outline" size="lg">
                <Link href="/obras">
                  {home.ctaWorks}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/encargos">{home.ctaCommission}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-elevated py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
                {home.galleryKicker}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight">
                {home.galleryTitle}
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/obras">
                {home.galleryCta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <Gallery works={works} featuredOnly />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
          {home.processKicker}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight">
          {home.processTitle}
        </h2>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.n} className="bg-bg p-6">
              <p className="font-display text-3xl text-came">{step.n}</p>
              <h3 className="mt-4 font-display text-xl tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button asChild variant="link" className="px-0">
            <Link href="/oficio">
              {home.processLink}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <figure className="overflow-hidden rounded-2xl bg-elevated shadow-[var(--shadow-border)]">
            <img
              src={home.ctaImage}
              alt={home.ctaImageAlt}
              className="aspect-[16/10] w-full object-cover"
            />
          </figure>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-came">
              {home.ctaKicker}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              {home.ctaTitle}
            </h2>
            <p className="mt-5 max-w-lg text-muted">{home.ctaBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/encargos">{home.ctaButton}</Link>
              </Button>
              <ContactLinks size="md" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}