import { create } from "zustand";
import { lessonData } from "../lessons/lessons";
import { toast } from "react-hot-toast";
import { persist } from "zustand/middleware";

interface LessonStore {
  currentModule: number;
  currentTask: number;
  completedTasks: Set<number>;
  isGitInitialized: boolean;
  isLoading: boolean;
  setCurrentModule: (module: number) => void;
  setCurrentTask: (task: number) => void;
  validateCommand: (command: string) => boolean;
  setGitInitialized: (initialized: boolean) => void;
}

export const useLessonStore = create<LessonStore>()(
  persist(
    (set, get) => ({
      currentModule: 0,
      currentTask: 0,
      completedTasks: new Set(),
      isGitInitialized: false,
      isLoading: true,
      setCurrentModule: (module: number) => set({ currentModule: module }),
      setCurrentTask: (task: number) => set({ currentTask: task }),
      setGitInitialized: (initialized) =>
        set({ isGitInitialized: initialized }),
      validateCommand: (command: string) => {
        const { currentModule, currentTask, completedTasks } = get();
        const currentLesson =
          lessonData.lessons[currentModule].tasks[currentTask];

        if (currentLesson.cmd && command === currentLesson.cmd) {
          const newCompletedTasks = new Set([
            ...Array.from(completedTasks),
            currentLesson.id,
          ]);

          if (command === "git init") {
            set({
              completedTasks: newCompletedTasks,
              isGitInitialized: true,
            });
          } else {
            set({ completedTasks: newCompletedTasks });
          }

          toast.success("Great job! Moving to next lesson...");

          if (
            currentTask <
            lessonData.lessons[currentModule].tasks.length - 1
          ) {
            set({ currentTask: currentTask + 1 });
          } else if (currentModule < lessonData.lessons.length - 1) {
            set({ currentModule: currentModule + 1, currentTask: 0 });
          }

          return true;
        }

        return false;
      },
    }),
    {
      name: "git-learning-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isLoading = false;
        }
      },
      storage: {
        getItem: (name) => {
          try {
            const str = localStorage.getItem(name);
            if (!str) return null;
            const data = JSON.parse(str);
            if (data.state.completedTasks) {
              data.state.completedTasks = new Set(data.state.completedTasks);
            }
            return data;
          } catch (error) {
            console.error("Error loading from storage:", error);
            return null;
          }
        },
        setItem: (name, value) => {
          try {
            const serializedData = {
              ...value,
              state: {
                ...value.state,
                completedTasks:
                  value.state.completedTasks instanceof Set
                    ? Array.from(value.state.completedTasks)
                    : value.state.completedTasks,
              },
            };
            localStorage.setItem(name, JSON.stringify(serializedData));
          } catch (error) {
            console.error("Error saving to storage:", error);
          }
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
