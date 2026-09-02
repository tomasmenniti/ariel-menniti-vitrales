import Link from "next/link";
import { ContactLinks } from "@/components/contact-links";
import { LeadLine } from "@/components/lead-line";
import { Mark } from "@/components/mark";
import { copy, nav, site } from "@/utils/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-bg">
      <LeadLine />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Mark className="size-6" />
            <p className="font-display text-2xl tracking-tight">{site.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {copy.home.intro}
          </p>
          <ContactLinks size="sm" className="mt-6" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            Taller
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.to}>
                <Link href={item.to} className="hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{site.artist}</li>
            <li>
              <a
                className="hover:text-fg"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{site.instagram.replace("https://www.instagram.com/", "")}
              </a>
            </li>
            <li>
              <a className="hover:text-fg" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-xs text-subtle sm:px-8">
        {site.name} · {copy.footer.note}
      </div>
    </footer>
  );
}
