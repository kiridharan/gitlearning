"use client";
import React, { useState, useRef, useEffect } from "react";
import { lessonData, useLessonContext } from "../context/LessonContext";

interface TerminalCommand {
  command: string;
  output: string;
}

export default function Terminal() {
  const [commands, setCommands] = useState<TerminalCommand[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const { currentModule, currentTask, markTaskCompleted } = useLessonContext();

  const validateCommand = (command: string) => {
    const currentLesson = lessonData.lessons[currentModule].tasks[currentTask];
    const requiredCommands = currentLesson.steps
      .filter((step: string) => step.includes("`"))
      .map((step: string) => {
        const match = step.match(/`([^`]+)`/);
        return match ? match[1] : "";
      })
      .filter((cmd: any) => cmd);

    return requiredCommands.some((cmd: string) => {
      // Handle variable parts in commands
      const cmdRegex = cmd
        .replace(/</g, "(?:<|)")
        .replace(/>/g, "(?:>|)")
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        .replace("\\<\\?\\:\\>\\|\\)", "[^\\s]+");
      return new RegExp(`^${cmdRegex}$`).test(command);
    });
  };

  const handleCommand = (command: string) => {
    let output = "";
    const isValidCommand = validateCommand(command);

    if (isValidCommand) {
      output = "Command executed successfully!";
      markTaskCompleted(
        lessonData.lessons[currentModule].tasks[currentTask].id
      );
    } else {
      output = "Try again. Check the lesson steps for the correct command.";
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
