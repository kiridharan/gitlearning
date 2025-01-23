export interface Step {
  id?: number;
  description: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  action: string;
  steps: string[];
  cmd?: string;
}

export interface Module {
  module: string;
  difficulty: string;
  tasks: Task[];
}

export interface LessonData {
  lessons: Module[];
}
