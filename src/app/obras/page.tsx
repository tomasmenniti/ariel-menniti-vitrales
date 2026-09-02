import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { copy } from "@/data/site";
import { works } from "@/data/works";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Obras",
};

export default function ObrasPage() {
  const page = copy.obras;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.kicker}>{page.kicker}</p>

        <h1 className={styles.title}>{page.title}</h1>

        <p className={styles.body}>{page.body}</p>
      </header>

      <div className={styles.galleryContainer}>
        <Gallery works={works} />
      </div>
    </main>
  );
}