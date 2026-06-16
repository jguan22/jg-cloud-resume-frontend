export interface Project {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  subtitle: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  tags: string[];
  category: 'frontend' | 'fullstack' | 'ai' | 'systems';
  demoUrl?: string;
  githubUrl?: string;
  metrics?: {
    label: { zh: string; en: string };
    value: string;
  }[];
  features: {
    zh: string[];
    en: string[];
  };
}

export interface Experience {
  id: string;
  period: string;
  role: {
    zh: string;
    en: string;
  };
  company: string;
  location: {
    zh: string;
    en: string;
  };
  description: {
    zh: string[];
    en: string[];
  };
  skills: string[];
}

export interface Education {
  id: string;
  period: string;
  degree: {
    zh: string;
    en: string;
  };
  school: {
    zh: string;
    en: string;
  };
  highlights: {
    zh: string[];
    en: string[];
  };
}

export interface SkillGroup {
  category: {
    zh: string;
    en: string;
  };
  skills: {
    name: string;
    badge: {
      zh: string;
      en: string;
    };
    context: {
      zh: string;
      en: string;
    };
  }[];
}

export interface VisitorMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: string;
  badgeColor: string;
}

export type Language = 'zh' | 'en';
