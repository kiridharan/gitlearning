"use client";
import React from "react";
import { lessonData } from "../lessons/lessons";
import { useLessonStore } from "../store/lessonStore";

export default function GitLesson() {
  const {
    currentModule,
    currentTask,
    setCurrentModule,
    setCurrentTask,
    completedTasks,
  } = useLessonStore();

  const currentModuleData = lessonData.lessons[currentModule];
  const currentTaskData = currentModuleData?.tasks[currentTask];

  return (
    <div className="h-full flex flex-col text-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Git Tutorial</h2>
        <span className="px-2 py-1 bg-blue-600 rounded-full text-xs">
          {currentModuleData?.difficulty}
        </span>
      </div>

      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {lessonData.lessons.map((module, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentModule(index);
              setCurrentTask(0);
            }}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap
              ${
                currentModule === index
                  ? "bg-blue-600 text-white"
                  : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
              }`}
          >
            {module.module}
            {module.tasks.every((task) => completedTasks.has(task.id)) && (
              <span className="ml-2">✅</span>
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{currentTaskData?.title}</h3>
            {completedTasks.has(currentTaskData?.id || 0) && (
              <span className="text-green-500">✅</span>
            )}
          </div>

          <p className="text-gray-400">{currentTaskData?.description}</p>

          {currentTaskData?.type === "command" && (
            <div className="bg-[#2a2a2a] p-4 rounded-lg space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Command:</h4>
                <code className="bg-[#1e1e1e] px-2 py-1 rounded text-blue-400">
                  {currentTaskData.cmd}
                </code>
              </div>
              {currentTaskData.hint && (
                <div>
                  <h4 className="font-semibold mb-1">Hint:</h4>
                  <p className="text-gray-400">{currentTaskData.hint}</p>
                </div>
              )}
            </div>
          )}

          {currentTaskData?.type === "reading" && currentTaskData.content && (
            <div className="space-y-4">
              {currentTaskData.content.map((item, index) => (
                <div key={index} className="bg-[#2a2a2a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 mb-2">{item.text}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-semibold">Steps:</h4>
            <ul className="list-disc list-inside space-y-2">
              {currentTaskData?.steps.map((step, index) => (
                <li key={index} className="text-gray-400">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center pt-4 border-t border-[#333333]">
        <button
          onClick={() => setCurrentTask(Math.max(0, currentTask - 1))}
          disabled={currentTask === 0}
          className={`px-3 py-1 rounded ${
            currentTask === 0
              ? "bg-[#2a2a2a] text-gray-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <span className="text-sm">
          {currentTask + 1} of {currentModuleData?.tasks.length}
        </span>
        <button
          onClick={() =>
            setCurrentTask(
              Math.min(currentModuleData?.tasks.length - 1, currentTask + 1)
            )
          }
          disabled={currentTask === currentModuleData?.tasks.length - 1}
          className={`px-3 py-1 rounded ${
            currentTask === currentModuleData?.tasks.length - 1
              ? "bg-[#2a2a2a] text-gray-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
