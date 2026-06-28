import type { HeroStat } from '@/types';
import { roadmapSteps } from './roadmap';
import { commandCategories } from './commands';
import { correctedLab, practiceLab } from './labs';

const totalCommands = commandCategories.reduce(
  (acc, cat) => acc + cat.commands.length,
  0
);

const totalLabs = (correctedLab ? 1 : 0) + (practiceLab ? 1 : 0);

export const heroStats: HeroStat[] = [
  { label: 'Roadmap Steps', value: roadmapSteps.length },
  { label: 'Commands', value: `${totalCommands}+` },
  { label: 'Labs', value: totalLabs },
];
