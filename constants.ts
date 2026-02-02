import { ClassItem, Instructor, PricingPlan, DanceStyle } from './types';

// Instructors with real professional photos
export const INSTRUCTORS: Instructor[] = [
  {
    id: '1',
    name: 'Alonso Oliva',
    role: 'Director / Bachata',
    bio: 'Director y fundador de Focus Dance Studio. Especialista en técnica de pareja y musicalidad en Bachata.',
    imageUrl: '/instructors/alonso-oliva.webp',
  },
  {
    id: '2',
    name: 'Noelia Otero',
    role: 'Directora / Bachata · Coreo',
    bio: 'Directora y fundadora. Especialista en Lady Style, potencia y elegancia en cada movimiento.',
    imageUrl: '/instructors/noelia-otero.webp',
  },
  {
    id: '3',
    name: 'Elisabeth Jiménez',
    role: 'Reggaeton / Urbano',
    bio: 'Flow urbano y energía desbordante. Clases de alto rendimiento para todos los niveles.',
    imageUrl: '/instructors/elisabeth-jimenez.webp',
  },
  {
    id: '4',
    name: 'Andrea Sala',
    role: 'Contemporáneo / Técnica',
    bio: 'Técnica contemporánea y flexibilidad específica para bailarines. Especialista en Flex for Dancers.',
    imageUrl: '/instructors/andrea-sala.webp',
  },
  {
    id: '5',
    name: 'Laia Samper',
    role: 'Lírico / Jazz Fusion',
    bio: 'Fusión de estilos y expresión artística. Clases para jóvenes y adultos.',
    imageUrl: '/instructors/laia-samper.webp',
  },
  {
    id: '6',
    name: 'Isaac Alcaraz',
    role: 'Salsa / Izako',
    bio: 'Especialista en Salsa, pasos libres y formación de equipos. Director del proyecto Izako.',
    imageUrl: '/instructors/isaac-alvcaraz.webp',
  },
  {
    id: '7',
    name: 'Ivone Fuentes',
    role: 'Salsa / Bachata',
    bio: 'Profesora de Salsa y Bachata con enfoque en técnica femenina y musicalidad.',
    imageUrl: '/instructors/ivone-fuentes.webp',
  },
  {
    id: '8',
    name: 'Javi & Mariluz',
    role: 'Bachata',
    bio: 'Pareja de instructores especializada en Bachata. Conexión y didáctica detallada para todos los niveles.',
    imageUrl: '/instructors/javi-mariluz.webp',
  },
];

// Updated Schedule based on the provided "HORARIO FOCUS CURSO 2026" image
export const CLASSES: ClassItem[] = [
  // LUNES
  { id: 'l1', name: 'Reggaeton', style: DanceStyle.URBAN, level: 'General', time: '19:00', day: 'Lunes', instructor: 'Elisabeth' },
  { id: 'l2', name: 'Bachata Lady Style', style: DanceStyle.BACHATA, level: 'General', time: '20:00', day: 'Lunes', instructor: 'Noelia Otero' },
  { id: 'l3', name: 'Doble Filo (Grupo)', style: DanceStyle.BACHATA, level: 'Cerrado', time: '21:00', day: 'Lunes', instructor: 'Noelia Otero' },

  // MIERCOLES (Assuming placement based on image columns)
  { id: 'x1', name: 'Bachata Inicio', style: DanceStyle.BACHATA, level: 'Iniciación', time: '19:00', day: 'Miércoles', instructor: 'Alonso Oliva' },
  { id: 'x2', name: 'Bachata Intermedio', style: DanceStyle.BACHATA, level: 'Intermedio', time: '21:00', day: 'Miércoles', instructor: 'Alonso & Noelia' },
  { id: 'x3', name: 'Bachata Avanzado', style: DanceStyle.BACHATA, level: 'Avanzado', time: '22:00', day: 'Miércoles', instructor: 'Alonso & Noelia' },

  // JUEVES
  { id: 'j1', name: 'Contemporáneo', style: DanceStyle.CONTEMPORARY, level: 'General', time: '11:00', day: 'Jueves', instructor: 'Andrea Sala' },
  { id: 'j2', name: 'Flex for Dancers', style: DanceStyle.CONTEMPORARY, level: 'General', time: '12:00', day: 'Jueves', instructor: 'Andrea Sala' },
  { id: 'j3', name: 'Lírico/Jazz Fusion', style: DanceStyle.CONTEMPORARY, level: '+13 años', time: '16:00', day: 'Jueves', instructor: 'Laia Samper' },
  { id: 'j4', name: 'Lírico/Jazz Fusion', style: DanceStyle.CONTEMPORARY, level: '8-12 años', time: '17:00', day: 'Jueves', instructor: 'Laia Samper' },
  { id: 'j5', name: 'Salsa Pasos Libres', style: DanceStyle.SALSA, level: 'General', time: '18:00', day: 'Jueves', instructor: 'Isaac & Ivone' },
  { id: 'j6', name: 'Izako Dúo', style: DanceStyle.SALSA, level: 'General', time: '19:00', day: 'Jueves', instructor: 'Isaac & Ivone' },
  { id: 'j7', name: 'Izako Formation', style: DanceStyle.SALSA, level: 'General', time: '20:00', day: 'Jueves', instructor: 'Isaac & Ivone' },
  { id: 'j8', name: 'Brave Woman', style: DanceStyle.HEELS, level: 'Videoclass', time: '21:00', day: 'Jueves', instructor: 'Isaac & Ivone' },

  // VIERNES
  { id: 'v1', name: 'Bachata Inicio', style: DanceStyle.BACHATA, level: 'Iniciación', time: '18:00', day: 'Viernes', instructor: 'Javi & Mariluz' },
  { id: 'v2', name: 'Bachata Lady Style', style: DanceStyle.BACHATA, level: 'General', time: '19:00', day: 'Viernes', instructor: 'Mariluz' },
  { id: 'v3', name: 'Bachata Intermedio', style: DanceStyle.BACHATA, level: 'Intermedio', time: '20:00', day: 'Viernes', instructor: 'Javi & Mariluz' },
  { id: 'v4', name: 'Bachata Avanzado', style: DanceStyle.BACHATA, level: 'Avanzado', time: '21:00', day: 'Viernes', instructor: 'Javi & Mariluz' },
];

export const PRICING: PricingPlan[] = [
  {
    id: 'single',
    name: 'SINGLE',
    price: '20€',
    period: '/ clase',
    features: ['Clase suelta (OPEN O PLUS)'],
  },
  {
    id: 'flow',
    name: 'FLOW',
    price: '39€',
    period: '/ mes',
    features: ['1 clase OPEN a la semana'],
    upgrades: ['1 clase PLUS +10€ (Total: 49€)'],
  },
  {
    id: 'move',
    name: 'MOVE',
    price: '69€',
    period: '/ mes',
    features: ['A escoger:', '2 clases OPEN a la semana', 'ó 1 clase OPEN + 1 clase PLUS'],
    upgrades: ['2 clases PLUS +10€ (Total: 79€)'],
  },
  {
    id: 'grow',
    name: 'GROW',
    price: '89€',
    period: '/ mes',
    features: ['A escoger:', '3 clases OPEN a la semana', 'ó 2 clases OPEN + 1 clase PLUS'],
    upgrades: ['2 clases PLUS +10€ (Total: 99€)'],
    recommended: true,
  },
  {
    id: 'focus',
    name: 'FOCUS',
    price: '105€',
    period: '/ mes',
    features: ['A escoger:', '3 clases PLUS', 'ó 4 clases OPEN', 'ó 3 clases OPEN + 1 clase PLUS'],
    upgrades: ['2 clases PLUS +10€ (115€)', '3 clases PLUS +20€ (125€)', '4 clases PLUS +30€ (135€)'],
  },
];

export const SCHEDULE_DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];