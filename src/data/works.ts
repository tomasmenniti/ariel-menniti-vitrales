export type Work = {
  id: string;
  title: string;
  kind: string;
  use: string;
  technique: string;
  image: string;
  span: "tall" | "wide" | "square";
  featured?: boolean;
};

export const works: Work[] = [
  {
    id: "roseton",
    title: "Rosetón",
    kind: "Ventana circular",
    use: "Capillas, patios y cajas de escalera",
    technique: "Vidrio catedral emplomado",
    image: "/obras/roseton.jpg",
    span: "square",
    featured: true,
  },
  {
    id: "irises",
    title: "Jardín de invierno",
    kind: "Panel floral",
    use: "Ventanas de estar y vestíbulos",
    technique: "Vidrio opalescente y catedral",
    image: "/obras/irises.jpg",
    span: "tall",
    featured: true,
  },
  {
    id: "valle",
    title: "Valle al crepúsculo",
    kind: "Paisaje",
    use: "Ventanales y mamparas",
    technique: "Vidrio pintado y emplomado",
    image: "/obras/valle.jpg",
    span: "wide",
  },
  {
    id: "arbol",
    title: "Árbol de la vida",
    kind: "Panel narrativo",
    use: "Capillas, memoriales y casas",
    technique: "Vidrio catedral emplomado",
    image: "/obras/arbol.jpg",
    span: "tall",
    featured: true,
  },
  {
    id: "palomas",
    title: "Palomas",
    kind: "Panel simbólico",
    use: "Capillas y vanos estrechos",
    technique: "Vidrio opal y catedral",
    image: "/obras/palomas.jpg",
    span: "tall",
  },
  {
    id: "geometria",
    title: "Geometría de ámbar",
    kind: "Composición geométrica",
    use: "Montantes, puertas y frisos",
    technique: "Vidrio catedral en plomo",
    image: "/obras/geometria.jpg",
    span: "square",
  },
  {
    id: "puerta",
    title: "Puerta del patio",
    kind: "Puerta y montante",
    use: "Accesos, patios y galerías",
    technique: "Vidrio emplomado sobre madera",
    image: "/obras/puerta.jpg",
    span: "wide",
    featured: true,
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Conversación y medida",
    body: "Se visita el vano o se trabaja con fotos y cotas. Se habla de la luz del lugar, el estilo de la casa y lo que la pieza tiene que decir.",
  },
  {
    n: "02",
    title: "Boceto y cartón",
    body: "El dibujo se pasa a tamaño real. Ahí se decide el corte de cada vidrio, el color y el camino del plomo.",
  },
  {
    n: "03",
    title: "Corte del vidrio",
    body: "Cada pieza se corta a mano sobre el cartón. El vidrio catedral, el opalescente y el antiguo no se comportan igual: hay que escucharlos.",
  },
  {
    n: "04",
    title: "Emplomado y soldadura",
    body: "El plomo abraza cada fragmento. Se suelda cada junta, se masilla y se limpia hasta que el panel queda firme y estanco.",
  },
  {
    n: "05",
    title: "Instalación",
    body: "La pieza vuelve a su vano: puerta, ventana o lámpara. La prueba final es siempre la misma: cómo entra el sol a la tarde.",
  },
];
