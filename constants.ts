import { ClassItem, Instructor, PricingPlan, DanceStyle } from './types';

// Updated with real instructors from the provided images
// Using high-quality unsplash placeholders that match the vibe of the specific person/style
export const INSTRUCTORS: Instructor[] = [
  {
    id: '1',
    name: 'Alonso Oliva',
    role: 'Director / Bachata',
    bio: 'Director y fundador. Especialista en técnica de pareja y musicalidad.',
    imageUrl: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=800&auto=format&fit=crop', 
  },
  {
    id: '2',
    name: 'Noelia Otero',
    role: 'Directora / Lady Style',
    bio: 'Directora y fundadora. Potencia, estilo y elegancia en cada movimiento.',
    imageUrl: 'https://images.unsplash.com/photo-1616001090400-50d268d37442?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Elisabeth Jiménez',
    role: 'Reggaeton / Urbano',
    bio: 'Flow urbano y energía desbordante. Clases de alto rendimiento.',
    imageUrl: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=800&auto=format&fit=crop', // Urban style
  },
  {
    id: '4',
    name: 'Andrea Sala',
    role: 'Contemporáneo / Flex',
    bio: 'Técnica contemporánea y flexibilidad específica para bailarines.',
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Laia Samper',
    role: 'Lírico / Jazz Fusion',
    bio: 'Fusión de estilos y expresión artística para todas las edades.',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop', // Ballet/Jazz vibe
  },
  {
    id: '6',
    name: 'Isaac & Ivone',
    role: 'Salsa / Bachata / Izako',
    bio: 'Pareja profesional especializada en Salsa, pasos libres y formación de equipos.',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop', // Club/Couple vibe
  },
  {
    id: '7',
    name: 'Javi & Mariluz',
    role: 'Bachata Instructors',
    bio: 'Conexión y didáctica detallada para todos los niveles de Bachata.',
    imageUrl: 'https://images.unsplash.com/photo-1545959968-37c2b535d48d?q=80&w=800&auto=format&fit=crop', // Happy couple vibe
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
    name: 'Drop In',
    price: '15€',
    period: '/ clase',
    features: ['Acceso a 1 clase', 'Reserva anticipada', 'Validez 30 días'],
  },
  {
    id: 'pack4',
    name: 'Focus Pack',
    price: '50€',
    period: '/ mes',
    features: ['4 clases mensuales', 'Acceso a eventos sociales', 'Descuento en workshops', 'Corrección personalizada'],
    recommended: true,
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    price: '90€',
    period: '/ mes',
    features: ['Acceso ilimitado', 'Priority Booking', 'Masterclasses incluidas', 'Tutoría mensual 15min'],
  },
];

export const SCHEDULE_DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];