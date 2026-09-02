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
import styles from "./styles.module.css";

export default function EncargosPage() {
  const page = copy.encargos;
  const [sent, setSent] = useState(false);
  const [kind, setKind] =
    useState<(typeof commissionTypes)[number]>("Ventana");

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
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>{page.kicker}</p>

          <h1 className={styles.title}>{page.title}</h1>

          <p className={styles.body}>{page.body}</p>

          <ContactLinks className={styles.contactLinks} />
        </header>

        <div className={styles.formCard}>
          {sent ? (
            <div className={styles.sentState}>
              <span className={styles.sentIcon}>
                <Check className="size-5" />
              </span>

              <h2 className={styles.sentTitle}>{page.sentTitle}</h2>

              <p className={styles.sentBody}>
                {page.sentBody}{" "}
                <a
                  className={styles.emailLink}
                  href={gmailHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.email}
                </a>
                .
              </p>

              <Button
                className={styles.sentAgainButton}
                variant="outline"
                onClick={() => setSent(false)}
              >
                {page.sentAgain}
              </Button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <Field label="Nombre" htmlFor="name">
                <Input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                />
              </Field>

              <div className={styles.contactFields}>
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
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <fieldset className={styles.typeFieldset}>
                <legend className={styles.typeLegend}>
                  Tipo de pieza
                </legend>

                <div className={styles.typeOptions}>
                  {commissionTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setKind(type)}
                      className={cn(
                        styles.typeButton,
                        kind === type
                          ? styles.typeButtonActive
                          : styles.typeButtonInactive,
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </fieldset>

              <Field label="Ciudad o lugar de la obra" htmlFor="place">
                <Input
                  id="place"
                  name="place"
                  placeholder="Casa, capilla, patio…"
                />
              </Field>

              <Field label="Contame la idea" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Medidas del vano, estilo, colores, si hay fotos…"
                />
              </Field>

              <Button
                type="submit"
                size="lg"
                className={styles.submitButton}
              >
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
    <div className={styles.field}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}