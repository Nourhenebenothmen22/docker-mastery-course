export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: {
    name: string;
    linkedin: string;
    github: string;
    instagram: string;
    whatsapp: string;
  };
}

export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  practice: string;
  commands: string[];
}

export interface DockerCommand {
  command: string;
  description: string;
  example: string;
  warning?: string;
}

export interface CommandCategory {
  title: string;
  description: string;
  commands: DockerCommand[];
}

export interface LabStep {
  title: string;
  description: string;
  code?: string;
  codeLanguage?: string;
}

export interface CorrectedLabStep extends LabStep {
  expectedResult?: string;
}

export interface PracticeLabTask extends LabStep {
  hint?: string;
  checkpoint?: string;
  expectedResult?: string;
}

export interface CorrectedLabData {
  title: string;
  objective: string;
  steps: CorrectedLabStep[];
}

export interface PracticeLabData {
  title: string;
  objective: string;
  tasks: PracticeLabTask[];
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface CourseCardItem {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DockerfileInstruction {
  label: string;
  desc: string;
}
