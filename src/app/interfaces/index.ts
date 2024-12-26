export interface Message {
  id: number;
  isBot: boolean;
  message: string;
  hours: string;
}

export interface InfoBot {
  key: string;
  url: string;
  training: string;
}

export interface Glossary {
  id: number;
  title: string;
  description: string;
  statusOpen: boolean;
}
