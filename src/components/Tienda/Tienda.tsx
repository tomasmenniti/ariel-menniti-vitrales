"use client";

import taller1 from '../../assets/images/taller/t1.png';
import taller2 from '../../assets/images/taller/t2.png';

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy, whatsappHref } from "@/utils/data/site";
import Image from "next/image";

// Icono de WhatsApp extraído de tu código
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const storeItems = [
  {
    id: "1",
    image: taller1,
    alt: "Manos cortando vidrio de color sobre el banco de trabajo",
    title: "Indio Solari | Ventana circular",
    price: "$15.000.000",
  },
  {
    id: "2",
    image: taller2,
    alt: "Panel de vitral en proceso de emplomado sobre el banco",
    title: "Virgen de Lourdes | Ventana circular",
    price: "$12.500.000",
  },
];

export function StoreGallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? i : (i + 1) % storeItems.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? i : (i - 1 + storeItems.length) % storeItems.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const current = active !== null ? storeItems[active] : null;

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-2">
        {storeItems.map((item, index) => (
          <figure key={item.id} className="overflow-hidden rounded-xl bg-elevated">
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group flex h-full w-full flex-col text-left"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="flex w-full items-center justify-between px-5 py-4">
                <span className="text-sm text-muted">{item.title}</span>
                <span className="text-lg font-bold text-foreground">
                  {item.price}
                </span>
              </figcaption>
            </button>
          </figure>
        ))}
      </section>

      <Dialog.Root
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/85" />
          <Dialog.Content className="fixed inset-3 z-50 flex flex-col overflow-hidden rounded-xl bg-elevated shadow-[var(--shadow-lift)] outline-none sm:inset-8">
            {current ? (
              <>
                <div className="relative min-h-0 flex-1 bg-bg">
                  <Image
                    src={current.image}
                    alt={current.alt}
                    className="h-full w-full object-contain"
                  />
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-md bg-bg/70 text-fg transition-colors hover:bg-bg/90"
                      aria-label="Cerrar"
                    >
                      <X className="size-5" />
                    </button>
                  </Dialog.Close>
                  {storeItems.length > 1 ? (
                    <>
                      <button
                        type="button"
                        className="absolute top-1/2 left-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-md bg-bg/70 text-fg transition-colors hover:bg-bg/90"
                        aria-label="Anterior"
                        onClick={() =>
                          setActive((i) =>
                            i === null
                              ? 0
                              : (i - 1 + storeItems.length) % storeItems.length,
                          )
                        }
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        type="button"
                        className="absolute top-1/2 right-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-md bg-bg/70 text-fg transition-colors hover:bg-bg/90"
                        aria-label="Siguiente"
                        onClick={() =>
                          setActive((i) =>
                            i === null ? 0 : (i + 1) % storeItems.length,
                          )
                        }
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </>
                  ) : null}
                </div>
                
                <div className="border-t border-border px-5 py-4 sm:px-8">
                  <Dialog.Title className="font-display text-2xl tracking-tight">
                    {current.title}
                  </Dialog.Title>
                  <Dialog.Description className="mt-1 text-lg font-bold text-foreground">
                    {current.price}
                  </Dialog.Description>
                  
                  <Button 
                    asChild 
                    className="mt-5 gap-2 rounded-[14px] bg-[#EBE7DF] text-black hover:bg-[#DDD8CD]"
                  >
                    <a 
                      href={whatsappHref()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="size-4" />
                      {copy.contact.whatsapp}
                    </a>
                  </Button>
                </div>
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}