"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLessonStore } from "../store/lessonStore";
import { lessonData } from "../lessons/lessonsData";
import { toast } from "react-hot-toast";

interface TerminalCommand {
  command: string;
  output: string;
}

export default function Terminal() {
  const [commands, setCommands] = useState<TerminalCommand[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const { currentModule, currentTask, validateCommand } = useLessonStore();

  const handleCommand = (command: string) => {
    if (command.trim() === "git init") {
      useLessonStore.getState().setGitInitialized(true);
    }
    const currentTaskData =
      lessonData.lessons[currentModule]?.tasks[currentTask];
    let output = "";

    if (
      currentTaskData?.type === "command" &&
      currentTaskData.cmd === command
    ) {
      output =
        currentTaskData.expectedOutput || "Command executed successfully";
      validateCommand(command);
    } else {
      output =
        "Command not recognized or incorrect. Check the lesson instructions.";
      toast.error("Try again! Check the lesson for the correct command.");
    }

    if (command.startsWith("git branch ")) {
      window.dispatchEvent(
        new CustomEvent("git-command", {
          detail: { command: command },
        }),
      );
    }
    setCommands([...commands, { command, output }]);
    setCurrentInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(currentInput);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commands]);

  return (
    <div className="h-full bg-[#1e1e1e] text-gray-300 font-mono p-2 overflow-y-auto">
      {commands.map((cmd, index) => (
        <div key={index} className="mb-2">
          <div>
            <span className="text-green-500">$</span> {cmd.command}
          </div>
          <div className="text-gray-400 whitespace-pre-line">{cmd.output}</div>
        </div>
      ))}
      <div className="flex items-center">
        <span className="text-green-500">$</span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 ml-2 bg-transparent outline-none border-none"
          autoFocus
          placeholder="Type the command from the current lesson..."
        />
      </div>
      <div ref={terminalEndRef} />
    </div>
  );
}
