import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { copy, site } from "@/data/site";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Obras",
};

export default function ObrasPage() {
  const page = copy.obras;

  return (
    <main className="pt-24 sm:pt-28">
      <header className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
          {page.kicker}
        </p>
        <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">
          {page.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {page.body}
        </p>
      </header>
      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Gallery works={works} />
      </div>
    </main>
  );
}