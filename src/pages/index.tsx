import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactLinks } from "@/components/contact-links";
import { Gallery } from "@/components/gallery";
import { Button } from "@/components/ui/button";
import { copy, site } from "@/utils/data/site";
import { processSteps, works } from "@/utils/data/works";
import styles from "./styles.module.css"; // ajusta la ruta si hace falta
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const home = copy.home;
  const router = useRouter();

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <figure className={styles.heroFigure}>
            <Image
              src={site.portrait}
              alt={site.portraitAlt}
              className={styles.heroImage}
            />
          </figure>
          <div className={styles.heroContent}>
            <p className={styles.kickerCame}>{site.kicker}</p>
            <p className={styles.siteName}>{site.name}</p>
            <h1 className={styles.tagline}>{home.tagline}</h1>
            <p className={styles.intro}>{home.intro}</p>
            <ContactLinks size="lg" className={styles.contactLinks} />
            <div className={styles.ctaButtons}>
              <Button asChild variant="outline">
                <Link href="/obras">{home.ctaWorks}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/encargos">{home.ctaCommission}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryHeader}>
            <div>
              <p className={styles.kickerSubtle}>{home.galleryKicker}</p>
              <h2 className={styles.galleryTitle}>{home.galleryTitle}</h2>
            </div>

            <Button asChild variant="outline">
              <Link href="/obras">{home.galleryCta}</Link>
            </Button>
          </div>
          <Gallery works={works} featuredOnly />
        </div>
      </section>

      <section className={styles.processSection}>
        <p className={styles.kickerSubtle}>{home.processKicker}</p>
        <h2 className={styles.processTitle}>{home.processTitle}</h2>
        <ol className={styles.processList}>
          {processSteps.map((step) => (
            <li key={step.n} className={styles.processItem}>
              <p className={styles.processNumber}>{step.n}</p>
              <h3 className={styles.processItemTitle}>{step.title}</h3>
              <p className={styles.processItemBody}>{step.body}</p>
            </li>
          ))}
        </ol>
        <div className={styles.processLinkWrap}>
          <Button asChild variant="outline">
            <Link href="/tienda">{home.processLink}</Link>
          </Button>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <figure className={styles.ctaFigure}>
            <Image
              src={home.ctaImage}
              alt={home.ctaImageAlt}
              className={styles.ctaImage}
            />
          </figure>
          <div>
            <p className={styles.kickerCame}>{home.ctaKicker}</p>
            <h2 className={styles.ctaTitle}>{home.ctaTitle}</h2>
            <p className={styles.ctaBody}>{home.ctaBody}</p>
            <div className={styles.ctaActions}>
              <Button asChild variant="outline">
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
