"use client";
import React, { createContext, useContext, useState } from "react";
import { lessonData } from "../lessons/lessonsData";
import { toast } from "react-hot-toast";

interface LessonContextType {
  currentModule: number;
  currentTask: number;
  setCurrentModule: (module: number) => void;
  setCurrentTask: (task: number) => void;
  validateCommand: (command: string) => boolean;
  completedTasks: Set<number>;
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export function LessonProvider({ children }: { children: React.ReactNode }) {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set());

  const validateCommand = (command: string): boolean => {
    const currentLesson = lessonData.lessons[currentModule].tasks[currentTask];

    if (currentLesson.cmd && command === currentLesson.cmd) {
      // Mark task as completed
      setCompletedTasks(
        (prev) => new Set(Array.from(prev).concat(currentLesson.id))
      );

      // Show success message
      toast.success("Great job! Moving to next lesson...");

      // Move to next task or module
      if (currentTask < lessonData.lessons[currentModule].tasks.length - 1) {
        setCurrentTask(currentTask + 1);
      } else if (currentModule < lessonData.lessons.length - 1) {
        setCurrentModule(currentModule + 1);
        setCurrentTask(0);
      }

      return true;
    }

    return false;
  };

  return (
    <LessonContext.Provider
      value={{
        currentModule,
        currentTask,
        setCurrentModule,
        setCurrentTask,
        validateCommand,
        completedTasks,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
}

export const useLessonContext = () => {
  const context = useContext(LessonContext);
  if (!context) {
    throw new Error("useLessonContext must be used within a LessonProvider");
  }
  return context;
};
