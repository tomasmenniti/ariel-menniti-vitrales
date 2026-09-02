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
    title: "Pachamama",
    kind: "Ventana circular",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio catedral emplomado",
    image: "/obras/1.png",
    span: "square",
    featured: true,
  },
  {
    id: "irises",
    title: "Ventanas de sus autos",
    kind: "Horacio Pagani",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio opalescente y catedral",
    image: "/obras/2.png",
    span: "tall",
    featured: true,
  },
  {
    id: "valle",
    title: "Valle al crepúsculo",
    kind: "Paisaje",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio pintado y emplomado",
    image: "/obras/3.png",
    span: "wide",
  },
  {
    id: "arbol",
    title: "Cúpula retro",
    kind: "Techos",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio catedral emplomado",
    image: "/obras/4.png",
    span: "tall",
    featured: true,
  },
  {
    id: "palomas",
    title: "Virgen de Lourdes",
    kind: "Ventana católicas",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio opal y catedral",
    image: "/obras/5.png",
    span: "tall",
  },
  {
    id: "geometria",
    title: "Geometría de ámbar",
    kind: "Composición geométrica",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio catedral en plomo",
    image: "/obras/6.png",
    span: "square",
  },
  {
    id: "puerta",
    title: "Árbol de la vida",
    kind: "Ventana elevada",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio emplomado sobre madera",
    image: "/obras/7.png",
    span: "wide",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Tu consulta conmigo",
    body: "Respondo tus dudas. Hablamos sobre tu idea y te guío para hacerla realidad.",
  },
  {
    n: "02",
    title: "Entrega de boceto",
    body: "El dibujo se pasa a tamaño real para que veas como quedaría una vez instalado.",
  },
  {
    n: "03",
    title: "Confirmación del vitral",
    body: "Cuando tomes la decisión se realiza un adelanto a modo de seña y se comienza a construir.",
  },
  {
    n: "04",
    title: "Emplomado y soldadura",
    body: "Empiezo a fabricarlo realizando los cortes.",
  },
  {
    n: "05",
    title: "Instalación",
    body: "Coordinamos una visita para que vaya a instalarlo.",
  },
];
