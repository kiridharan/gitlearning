import { create } from 'zustand';
import { lessonData } from '../lessons/lessons';
import { toast } from 'react-hot-toast';

interface LessonStore {
  currentModule: number;
  currentTask: number;
  completedTasks: Set<number>;
  setCurrentModule: (module: number) => void;
  setCurrentTask: (task: number) => void;
  validateCommand: (command: string) => boolean;
}

export const useLessonStore = create<LessonStore>((set, get) => ({
  currentModule: 0,
  currentTask: 0,
  completedTasks: new Set(),

  setCurrentModule: (module: number) => set({ currentModule: module }),
  setCurrentTask: (task: number) => set({ currentTask: task }),

  validateCommand: (command: string) => {
    const { currentModule, currentTask, completedTasks } = get();
    const currentLesson = lessonData.lessons[currentModule].tasks[currentTask];

    if (currentLesson.cmd && command === currentLesson.cmd) {
      // Mark task as completed
      set({ completedTasks: new Set([...Array.from(completedTasks), currentLesson.id]) });

      // Show success message
      toast.success('Great job! Moving to next lesson...');

      // Move to next task or module
      if (currentTask < lessonData.lessons[currentModule].tasks.length - 1) {
        set({ currentTask: currentTask + 1 });
      } else if (currentModule < lessonData.lessons.length - 1) {
        set({ currentModule: currentModule + 1, currentTask: 0 });
      }

      return true;
    }

    return false;
  }
}));