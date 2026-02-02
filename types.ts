export interface ClassItem {
  id: string;
  name: string;
  style: string;
  level: string;
  time: string;
  day: string;
  instructor: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  upgrades?: string[];
  recommended?: boolean;
}

export enum DanceStyle {
  ALL = "Todos",
  BACHATA = "Bachata",
  SALSA = "Salsa",
  CONTEMPORARY = "Contemporáneo",
  URBAN = "Urbano",
  HEELS = "Heels"
}