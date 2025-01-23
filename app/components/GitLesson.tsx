"use client";
import React, { useState } from "react";
import { lessonData } from "../context/LessonContext";

export default function GitLesson() {
  const [selectedModule, setSelectedModule] = useState<number>(0);
  const [selectedTask, setSelectedTask] = useState<number>(0);

  const currentModule = lessonData.lessons[selectedModule];
  const currentTask = currentModule?.tasks[selectedTask];

  return (
    <div className="h-full flex flex-col text-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Git Tutorial</h2>
        <span className="px-2 py-1 bg-blue-600 rounded-full text-xs">
          {currentModule?.difficulty}
        </span>
      </div>

      {/* Module Navigation */}
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {lessonData.lessons.map((module, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedModule(index);
              setSelectedTask(0);
            }}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap
              ${
                selectedModule === index
                  ? "bg-blue-600 text-white"
                  : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
              }`}
          >
            {module.module}
          </button>
        ))}
      </div>

      {/* Task Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{currentTask?.title}</h3>

          <p className="text-gray-400">{currentTask?.description}</p>

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Action Required:</h4>
            <p className="text-blue-400">{currentTask?.action}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Steps:</h4>
            <ul className="list-disc list-inside space-y-2">
              {currentTask?.steps.map((step, index) => (
                <li key={index} className="text-gray-400">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Task Navigation */}
      <div className="mt-4 flex justify-between items-center pt-4 border-t border-[#333333]">
        <button
          onClick={() => setSelectedTask(Math.max(0, selectedTask - 1))}
          disabled={selectedTask === 0}
          className={`px-3 py-1 rounded ${
            selectedTask === 0
              ? "bg-[#2a2a2a] text-gray-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <span className="text-sm">
          {selectedTask + 1} of {currentModule?.tasks.length}
        </span>
        <button
          onClick={() =>
            setSelectedTask(
              Math.min(currentModule?.tasks.length - 1, selectedTask + 1)
            )
          }
          disabled={selectedTask === currentModule?.tasks.length - 1}
          className={`px-3 py-1 rounded ${
            selectedTask === currentModule?.tasks.length - 1
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
