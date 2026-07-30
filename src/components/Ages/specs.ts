import { Decade } from "./types";
import bg1920 from '../../assets/1920-Background.webp';
import bg1940 from '../../assets/1940-Background.webp';
import bg1960 from '../../assets/1960-Background.webp';
import bg1980 from '../../assets/1980-Background.webp';
import bg2000 from '../../assets/2000-Background.webp';
import bg2020 from '../../assets/2020-Background.webp';
import bg2030 from '../../assets/2030-Background.webp';


// Map decade -> asset URL (partial routing for assets)
const decadeAssets: Record<string, string | null> = {
    '1920-1930': bg1920,
    '1940-1950': bg1940,
    '1960-1970': bg1960,
    '1980-1990': bg1980,
    '2000-2010': bg2000,
    '2020': bg2020,
    '2030': bg2030,
};

export function getDecadeAsset(decadeValue: string): string | null {
    return decadeAssets[decadeValue] ?? null;
}

export const decades: Decade[] = [
  {
      value: '1920-1930',
      label: 'Roaring Jazz / Dusty Grit',
      personality: 'Skill: polished frontend delivery. Strength: reliable execution and persistence under pressure.',
      background: decadeAssets['1920-1930'] ?? ''
  },
  {
      value: '1940-1950',
      label: 'Victory March / Retro Cool',
      personality: 'Skill: clean system architecture. Strength: disciplined implementation with attention to detail.',
      background: decadeAssets['1940-1950'] ?? ''
  },
  {
      value: '1960-1970',
      label: 'Free Spirit / Electric Groove',
      personality: 'Skill: creative interface design. Strength: rapid problem solving and practical experimentation.',
      background: decadeAssets['1960-1970'] ?? ''
  },
  {
      value: '1980-1990',
      label: 'Neon Drive / Startup Hustle',
      personality: 'Skill: modern JavaScript and TypeScript development. Strength: fast prototyping and getting work into production quickly.',
      background: decadeAssets['1980-1990'] ?? ''
  },
  {
      value: '2000-2010',
      label: 'Dotcom Edge / Mobile Pulse',
      personality: 'Skill: API development and responsive web apps. Strength: building mobile-ready, user-focused systems.',
      background: decadeAssets['2000-2010'] ?? ''
  },
  {
      value: '2020',
      label: 'AI Wave',
      personality: 'Skill: AI integrations and automation. Strength: cloud-native platform engineering and intelligent system design.',
      background: decadeAssets['2020'] ?? ''
  },
  {
      value: '2030',
      label: 'Future Vision',
      personality: 'Skill: scalable architecture and future-focused platform work. Strength: building AI-enabled services with practical product thinking.',
            background: decadeAssets['2030'] ?? ''
  },
];