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
