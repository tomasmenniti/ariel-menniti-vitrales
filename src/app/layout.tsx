import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { site, copy } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.kicker}`,
    template: `%s · ${site.name}`,
  },
  description: copy.home.intro,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="antialiased">
      <body className="bg-bg text-fg">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}