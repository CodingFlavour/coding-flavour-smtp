interface EmailData {
  from: string;
  to: string;
  name: string;
  message: string;
  templateKey?: string;
}

export type { EmailData };