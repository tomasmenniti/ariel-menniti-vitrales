import type { Metadata } from "next";
import Link from "next/link";
import { LeadLine } from "@/components/lead-line";
import { Button } from "@/components/ui/button";
import { StoreGallery } from "@/components/tienda";
import { copy } from "@/data/site";
import { processSteps } from "@/data/works";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Tienda",
};

export default function TiendaPage() {
  const page = copy.tienda;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.kicker}>{page.kicker}</p>

        <h1 className={styles.title}>{page.title}</h1>

        <p className={styles.lead}>{page.lead}</p>
      </header>

      <StoreGallery />

      <div className={styles.gallerySpacer} />

      <LeadLine className={styles.leadLine} />

      <section className={styles.pathSection}>
        <h2 className={styles.pathTitle}>{page.pathTitle}</h2>

        <ol className={styles.pathList}>
          {processSteps.map((step) => (
            <li key={step.n} className={styles.pathItem}>
              <p className={styles.pathNumber}>{step.n}</p>

              <h3 className={styles.pathItemTitle}>{step.title}</h3>

              <p className={styles.pathItemBody}>{step.body}</p>
            </li>
          ))}
        </ol>

        <Button asChild className={styles.pathCta} size="lg">
          <Link href="/encargos">{page.pathCta}</Link>
        </Button>
      </section>
    </main>
  );
}