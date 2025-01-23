"use client";
import React, { createContext, useContext, useState } from "react";
import { lessonData } from "../lessons/lessons";

interface LessonContextType {
  currentModule: number;
  currentTask: number;
  setCurrentModule: (module: number) => void;
  setCurrentTask: (task: number) => void;
  completedTasks: Set<number>;
  markTaskCompleted: (taskId: number) => void;
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export function LessonProvider({ children }: { children: React.ReactNode }) {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set());

  const markTaskCompleted = (taskId: number) => {
    setCompletedTasks((prev) => new Set(Array.from(prev).concat(taskId)));
    // Auto advance to next task
    const nextTask = currentTask + 1;
    if (nextTask < lessonData.lessons[currentModule].tasks.length) {
      setCurrentTask(nextTask);
    }
  };

  return (
    <LessonContext.Provider
      value={{
        currentModule,
        currentTask,
        setCurrentModule,
        setCurrentTask,
        completedTasks,
        markTaskCompleted,
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
