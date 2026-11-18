import { desc } from "motion/react-client";
import { RiLeafLine, RiMenuSearchLine, RiPsychotherapyLine } from "react-icons/ri";

export type Pillar = {
  number: string;
  title: string;
  text: string;
  icon: string;
  optional?: boolean;
};

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Clase de yoga inmersiva",
    text: "Movilidad suave, alineación bioenergética y respiración somática consciente.",
    icon: "yoga",
  },
  {
    number: "02",
    title: "Workshop presencial interactivo",
    text: "Metodología anti-fricción para comprender detonantes y construir constancia.",
    icon: "mind",
  },
  {
    number: "03",
    title: "Workbook personalizable",
    text: "Plantillas físicas y digitales para hábitos sostenibles y bienestar emocional.",
    icon: "book",
  },
  {
    number: "04",
    title: "Coffee break & networking",
    text: "Infusiones botánicas y conversaciones nutritivas con una comunidad afín.",
    icon: "coffee",
  },
  {
    number: "05",
    title: "Experiencia Cold Plunge",
    text: "Terapia de hielo guiada y completamente opcional para fortalecer el sistema nervioso.",
    icon: "cold",
    optional: true,
  },
  {
    number: "06",
    title: "Kit de marcas patrocinantes",
    text: "Productos somáticos, botánicos y ecológicos para prolongar la experiencia.",
    icon: "gift",
  },
] as const;

export const faqs = [
  {
    question: "¿Qué incluye el taller?",
    answer:
      "Sesión completa de yoga meditativo inmersivo, guía práctica de hábitos sostenibles para 2027, hidratación saludable y kit de bienvenida INSIDE con materiales somáticos ecológicos.",
  },
  {
    question: "¿Cuándo es el evento?",
    answer:
      "Sábado 12 de diciembre de 2026, de 09:30 a 18:30 hrs, en el Santuario Inmersivo INSIDE, Valle Sereno. Disponemos de traslados coordinados desde el centro urbano.",
  },
  {
    question: "¿Qué debo llevar?",
    answer:
      "Ropa cómoda y flexible en tonos neutros, tu mat opcional, botella reutilizable y disposición para desconectar de las pantallas durante las sesiones.",
  },
] as const;

export const team = [
  {
    name: "@KEYVILLEGASS",
    role: "Host & Hábitos",
    description: "Host de tu taller de hábitos sostenibles",
    image:
      "/images/when_key_img1.jpeg",
  },
  {
    name: "@VIVEWILD_",
    role: "Yoga & Meditación",
    description: "Coach de yoga, respiración, meditación y espiritualidad",
    image:
      "/images/when_vive_img2.jpeg",
  },
  {
    name: "@ANGELICABERNAAAAL",
    role: "Producción & Estrategia",
    description: "Producción y estrategia funcional del evento",
    image:
      "/images/when_angelica_img3.jpeg",
  },
] as const;

export const GALLERY = [
 {
    id: 1,
    src: "/images/Coldplunge_img1.jpeg", 
    title: "El primer paso",
    description: "Inmersión consciente"
 },
 {
    id: 2,
    src: "/images/Coldplunge_img2.jpeg", 
    title: "Reconexión Compartida",
    description: "Comunidad en sintonía"
 }, 
 {
    id: 3,
    src: "/images/Coldplunge_img3.jpeg", 
    title: "Claridad & Gozo",
    description: "Superación y calma"
 },
 {
    id: 4,
    src: "/images/Coldplunge_img4.jpeg", 
    title: "Presencia Absoluta",
    description: "Respiración somática"
 }
];

export const FORMY = [
    {
        id: 1,
        title: "Reset Somático & Silencio Mental",
        description: "Buscas un punto de partida real para tu disciplina física y mental",
        Icon: RiPsychotherapyLine,
    },
 {
        id: 2,
        title: "Hábitos Sostenibles sin Fricción",
        description: "Empiezas las cosas con mucha fuerza y al poco tiempo te desconectas de ti",
        Icon: RiLeafLine,
    },
    {
        id: 3,
        title: "Integración & Resiliencia Diaria",
        description: "Buscas un punto de partida real para tu disciplina física y mental",
        Icon: RiMenuSearchLine,
    },
];


export const STEPS = [
  {
    id: "01",
    title: "Reconexión y diagnóstico",
    description: "Un espacio de autoconocimiento profundo para entender tus bloqueos y definir un propósito real.",
  },
  {
    id: "02",
    title: "Arquitectura del entorno",
    description: "Diseñamos hábitos realistas y sostenibles mediante técnicas anti-fricción.",
  },
  {
    id: "03",
    title: "Plan de resistencia",
    description: "Aprendes a lidiar con el cansancio y los baches de motivación sin romper el proceso.",
  },
];