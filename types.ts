export enum SectionType {
  HOME = 'HOME',
  FAITH = 'FAITH', 
  CHARACTERS = 'CHARACTERS',
  RULES = 'RULES', // Replaces LOGISTICS
  ALMANACH = 'ALMANACH',
  KAELEN = 'KAELEN'
}

export interface LoreEntry {
  id: string;
  title: string;
  content: string;
  category?: string;
}

export interface Faction {
  id: string;
  name: string;
  type: string;
  description: string;
  colors: string;
}

export interface SpeciesEntry {
  id: string;
  name: string;     // z.B. "Menschen"
  title: string;    // z.B. "Die Bürger des Dominions"
  srdStats: string; // z.B. "Human (Standard)"
  description: string;
  variants?: { name: string; desc: string }[];
}

export interface ClassEntry {
  id: string;
  name: string;     // z.B. "Barbar"
  title: string;    // z.B. "Der Chem-Warrior"
  role: string;
  flavor: string;
  subinfo?: string;
  options?: { label: string; text: string }[];
}

export interface EquipmentEntry {
  category: string;
  items: { original: string; reskin: string }[];
}

export interface RuleEntry {
  title: string;
  desc: string;
}

export interface AlmanachSection {
  title: string;
  subtitle?: string;
  quote?: { text: string; author: string };
  intro?: string;
  subsections: {
    title?: string;
    text?: string;
    list?: { label?: string; content: string }[];
  }[];
}

export interface GodEntry {
  id: string;
  name: string;
  title: string;
  aspects: string;
  symbol: string;
  dogma: string;
  description: string;
  followers: string;
  forbidden?: boolean; // True for Whisper Gods
  reasonForbidden?: string;
}

export interface FaithPracticeEntry {
  title: string;
  desc: string;
  magicFlavor: string;
}