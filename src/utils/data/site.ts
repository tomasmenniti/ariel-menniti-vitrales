import portrait from '../../assets/ariel.jpg';
import obra8 from '../../assets/images/obras/8.png';

export const site = {
  name: "Ariel Menniti",
  kicker: "Vitrales",
  artist: "Ariel Menniti",
  email: "ariel_menniti@hotmail.com",
  whatsapp: "5491144120867",
  whatsappMessage: "Hola Ariel, te quiero consultar por tu trabajo",
  instagram: "https://www.instagram.com/arielmenniti_vitrales",
  portrait,
  portraitAlt: "Ariel Menniti frente a un vitral, con el pulgar arriba",
};

export const copy = {
  home: {
    tagline: "Diseño, creación y restauración",
    intro:
      "Vitrales para casas, capillas y espacios que merecen una luz propia. Corte, emplomado y soldadura en el taller, como se hace desde hace siglos.",
    ctaWorks: "Ver obras",
    ctaCommission: "Encargar una pieza",
    workshopKicker: "El taller",
    workshopTitle: "Un oficio de plomo, vidrio y paciencia.",
    workshopBody:
      "Cada vitral se construye pieza a pieza. No hay impresión ni atajo: el color es el vidrio mismo, el dibujo es el plomo, y la obra termina de nacer cuando el sol la atraviesa.",
    stats: [
      { label: "Técnica", value: "Emplomado tradicional" },
      { label: "Encargos", value: "A medida" },
      { label: "También", value: "Restauración" },
    ],
    galleryKicker: "Vitrales",
    galleryTitle: "Piezas que el taller puede hacer.",
    galleryCta: "Galería completa",
    processKicker: "Cómo se trabaja",
    processTitle: "Desde tu consulta hasta la instalación.",
    processLink: "El oficio, con calma",
    ctaKicker: "Encargos",
    ctaTitle: "Si tenés cualquier tipo de duda, no dudes en consultar.",
    ctaBody:
      "Ventanas, puertas, lámparas y restauraciones. Se responde con tiempos, presupuesto y un boceto antes de cortar el primer vidrio.",
    ctaButton: "Pedir un presupuesto",
    ctaImage: obra8,
    ctaImageAlt: "Puerta de vitral en un patio iluminado por la tarde",
  },
  obras: {
    kicker: "Galería",
    title: "Algunas de mis obras",
    body: "Rosetones, puertas, ventanas y techos. Cada encargo se fabrica con amor al arte. Estas piezas muestran el registro del taller.",
  },
  tienda: {
    kicker: "Tienda",
    title: "Algunas de mis obras disponibles",
    lead: "Estas obras actualmente están listas para que te las lleves.",
    essayTitle: "Un trabajo lento a propósito.",
    paragraphs: [
      "El vitral no es un dibujo pegado al cristal. Es un muro de luz: cientos de fragmentos que solo existen juntos. Por eso el taller sigue el método clásico — el mismo que se usa en capillas y casas antiguas — y no atajos de film o impresión.",
      "Se elige el vidrio por cómo deja pasar el sol, no solo por el color en la mesa. Un catedral de cobalto a las diez de la mañana no es el mismo a las cinco. Esa es la parte que no se puede apurar.",
      "También se restauran piezas: plomos cansados, vidrios rotos, ventanas que alguien más hizo hace décadas. El respeto es el mismo. Se repara lo que se puede y se documenta lo que se cambia.",
    ],
    pathTitle: "El proceso de un encargo",
    pathCta: "Consultar",
  },
  encargos: {
    kicker: "Encargos",
    title: "Contame tu idea. El resto se dibuja",
    body: "Una foto del lugar, las medidas y una idea — religiosa, floral, geométrica o abstracta — alcanzan para armar un presupuesto.",
    sentTitle: "Se abrió Gmail",
    sentBody: "Si no se abrió, escribí directo a",
    sentAgain: "Escribir otro mensaje",
  },
  contact: {
    whatsapp: "WhatsApp",
    email: "Gmail",
    instagram: "Instagram",
  },
  footer: {
    note: "vitrales hechos a mano",
  },
};

export const nav = [
  { to: "/", label: "Inicio" },
  { to: "/obras", label: "Obras" },
  { to: "/tienda", label: "Tienda" },
  { to: "/encargos", label: "Encargos" },
] as const;

export const commissionTypes = [
  "Ventana",
  "Puerta o montante",
  "Lámpara o objeto",
  "Restauración",
  "Otro",
] as const;

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function gmailHref(subject?: string, body?: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: site.email,
  });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}
