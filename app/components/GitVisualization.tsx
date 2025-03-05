import { useLessonStore } from "../store/lessonStore";
import { useState, useEffect } from "react";

interface Branch {
  name: string;
  position: { x: number; y: number };
}

export default function GitVisualization() {
  const isGitInitialized = useLessonStore((state) => state.isGitInitialized);
  // const currentModule = useLessonStore((state) => state.currentModule);
  const [branches, setBranches] = useState<Branch[]>([
    { name: "main", position: { x: 100, y: 100 } },
  ]);

  useEffect(() => {
    const handleBranchCreation = (command: string) => {
      if (command.startsWith("git branch ")) {
        const branchName = command.split(" ")[2];
        const newY = 50 + branches.length * 50;
        setBranches([
          ...branches,
          { name: branchName, position: { x: 300, y: newY } },
        ]);
      }
    };

    const eventHandler = (e: Event) => {
      const customEvent = e as CustomEvent<{ command: string }>;
      handleBranchCreation(customEvent.detail.command);
    };

    window.addEventListener("git-command", eventHandler);

    return () => {
      window.removeEventListener("git-command", eventHandler);
    };
  }, [branches]);

  const renderCommitNode = (x: number, y: number, label: string) => (
    <g key={label}>
      <circle
        cx={x}
        cy={y}
        r={20}
        fill="#2d333b"
        stroke="#4CAF50"
        strokeWidth={2}
      />
      <text x={x} y={y} textAnchor="middle" dy=".3em" fill="#fff" fontSize={12}>
        {label}
      </text>
    </g>
  );

  const renderBranch = (
    startX: number,
    startY: number,
    endX: number,
    endY: number,
  ) => (
    <path
      d={`M ${startX} ${startY} L ${endX} ${endY}`}
      stroke="#4CAF50"
      strokeWidth={2}
      fill="none"
      markerEnd="url(#arrowhead)"
    />
  );

  // const renderInitialState = () => (
  //   <svg width="100%" height="100%" viewBox="0 0 400 200">
  //     <defs>
  //       <marker
  //         id="arrowhead"
  //         markerWidth="10"
  //         markerHeight="7"
  //         refX="9"
  //         refY="3.5"
  //         orient="auto"
  //       >
  //         <polygon points="0 0, 10 3.5, 0 7" fill="#4CAF50" />
  //       </marker>
  //     </defs>
  //     {isGitInitialized && renderCommitNode(200, 100, "main")}
  //   </svg>
  // );

  // const renderBranchState = () => (
  //   <svg width="100%" height="100%" viewBox="0 0 400 200">
  //     <defs>
  //       <marker
  //         id="arrowhead"
  //         markerWidth="10"
  //         markerHeight="7"
  //         refX="9"
  //         refY="3.5"
  //         orient="auto"
  //       >
  //         <polygon points="0 0, 10 3.5, 0 7" fill="#4CAF50" />
  //       </marker>
  //     </defs>
  //     {renderCommitNode(100, 100, "main")}
  //     {renderCommitNode(300, 100, "A")}
  //     {renderBranch(120, 100, 280, 100)}
  //   </svg>
  // );

  // const renderMultipleBranches = () => (
  //   <svg width="100%" height="100%" viewBox="0 0 400 200">
  //     <defs>
  //       <marker
  //         id="arrowhead"
  //         markerWidth="10"
  //         markerHeight="7"
  //         refX="9"
  //         refY="3.5"
  //         orient="auto"
  //       >
  //         <polygon points="0 0, 10 3.5, 0 7" fill="#4CAF50" />
  //       </marker>
  //     </defs>
  //     {renderCommitNode(100, 100, "main")}
  //     {renderCommitNode(300, 50, "B")}
  //     {renderCommitNode(300, 150, "C")}
  //     {renderBranch(120, 100, 280, 50)}
  //     {renderBranch(120, 100, 280, 150)}
  //   </svg>
  // );

  const renderBranches = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 300">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#4CAF50" />
        </marker>
      </defs>
      {branches.map((branch) => (
        <>
          {renderCommitNode(branch.position.x, branch.position.y, branch.name)}
          {branch.name !== "main" &&
            renderBranch(120, 100, branch.position.x - 20, branch.position.y)}
        </>
      ))}
    </svg>
  );

  return (
    <div className="h-full flex items-center justify-center bg-[#1e1e1e]">
      {!isGitInitialized && (
        <div className="text-gray-400">
          Initialize git to start visualization
        </div>
      )}
      {isGitInitialized && renderBranches()}
    </div>
  );
}
