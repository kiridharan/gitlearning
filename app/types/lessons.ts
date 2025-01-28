export interface ContentItem {
  title: string;
  text: string;
  link?: string;
}
export interface Task {
  id: number;
  title: string;
  description: string;
  action: string;
  type: "reading" | "command";
  cmd?: string;
  expectedOutput?: string;
  hint?: string;
  content?: ContentItem[];
  steps: string[];
  validation?: (output: string) => boolean;
}

export interface Module {
  module: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All";
  type: "theory" | "practical";
  tasks: Task[];
}

export interface LessonData {
  welcome: {
    firstTime: string;
    returning: string;
  };
  lessons: Module[];
}
