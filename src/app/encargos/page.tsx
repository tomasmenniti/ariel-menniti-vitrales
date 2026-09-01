"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { Check, Mail } from "lucide-react";
import { ContactLinks } from "@/components/contact-links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { commissionTypes, copy, gmailHref, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function EncargosPage() {
  const page = copy.encargos;
  const [sent, setSent] = useState(false);
  const [kind, setKind] = useState<(typeof commissionTypes)[number]>("Ventana");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const place = String(data.get("place") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      `Tipo: ${kind}`,
      place ? `Lugar: ${place}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      gmailHref(`Encargo de vitral — ${kind}`, body),
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <main className="pt-24 sm:pt-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <header>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
            {page.kicker}
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">
            {page.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {page.body}
          </p>
          <ContactLinks className="mt-8" />
        </header>

        <div className="rounded-2xl bg-elevated p-5 shadow-[var(--shadow-border)] sm:p-8">
          {sent ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-surface text-came">
                <Check className="size-5" />
              </span>
              <h2 className="mt-5 font-display text-3xl tracking-tight">
                {page.sentTitle}
              </h2>
              <p className="mt-3 max-w-sm text-muted">
                {page.sentBody}{" "}
                <a
                  className="text-fg underline-offset-4 hover:underline"
                  href={gmailHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.email}
                </a>
                .
              </p>
              <Button className="mt-8" variant="outline" onClick={() => setSent(false)}>
                {page.sentAgain}
              </Button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={onSubmit}>
              <Field label="Nombre" htmlFor="name">
                <Input id="name" name="name" required autoComplete="name" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </Field>
                <Field label="Teléfono" htmlFor="phone">
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" />
                </Field>
              </div>
              <fieldset>
                <legend className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Tipo de pieza
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {commissionTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setKind(type)}
                      className={cn(
                        "h-10 rounded-md px-3.5 text-sm transition-colors duration-150",
                        kind === type
                          ? "bg-fg text-bg"
                          : "bg-surface text-muted hover:text-fg",
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </fieldset>
              <Field label="Ciudad o lugar de la obra" htmlFor="place">
                <Input id="place" name="place" placeholder="Casa, capilla, patio…" />
              </Field>
              <Field label="Contame la idea" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Medidas del vano, estilo, colores, si hay fotos…"
                />
              </Field>
              <Button type="submit" size="lg" className="w-full">
                <Mail className="size-4" />
                Enviar por Gmail
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}