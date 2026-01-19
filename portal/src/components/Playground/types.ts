export interface PlaygroundProps {
  className?: string;
}

export interface PlaygroundExample {
  id: string;
  title: string;
  description: string;
  files: Record<string, string>;
  entryPoint: string;
}

export interface PlaygroundFile {
  name: string;
  content: string;
  language: string;
}

