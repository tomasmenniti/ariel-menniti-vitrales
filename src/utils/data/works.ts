import { StaticImageData } from 'next/image';
import obra1 from '../../assets/images/obras/1.png';
import obra2 from '../../assets/images/obras/2.png';
import obra3 from '../../assets/images/obras/3.png';
import obra4 from '../../assets/images/obras/4.png';
import obra5 from '../../assets/images/obras/5.png';
import obra6 from '../../assets/images/obras/6.png';
import obra7 from '../../assets/images/obras/7.png';

export type Work = {
  id: string;
  title: string;
  kind: string;
  use: string;
  technique: string;
  image: StaticImageData;
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
    image: obra1,
    span: "square",
    featured: true,
  },
  {
    id: "irises",
    title: "Ventanas de sus autos",
    kind: "Horacio Pagani",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio opalescente y catedral",
    image: obra2,
    span: "tall",
    featured: true,
  },
  {
    id: "valle",
    title: "Valle al crepúsculo",
    kind: "Paisaje",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio pintado y emplomado",
    image: obra3,
    span: "wide",
  },
  {
    id: "arbol",
    title: "Cúpula retro",
    kind: "Techos",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio catedral emplomado",
    image: obra4,
    span: "tall",
    featured: true,
  },
  {
    id: "palomas",
    title: "Virgen de Lourdes",
    kind: "Ventana católicas",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio opal y catedral",
    image: obra5,
    span: "tall",
  },
  {
    id: "geometria",
    title: "Geometría de ámbar",
    kind: "Composición geométrica",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio catedral en plomo",
    image: obra6,
    span: "square",
  },
  {
    id: "puerta",
    title: "Árbol de la vida",
    kind: "Ventana elevada",
    use: "https://www.instagram.com/p/DaD0OBZnO5M/?img_index=1",
    technique: "Vidrio emplomado sobre madera",
    image: obra7,
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
