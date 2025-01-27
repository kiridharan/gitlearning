import React from "react";

interface FileExplorerProps {
  showGitFolder: boolean;
}

export const FileExplorer: React.FC<FileExplorerProps> = ({
  showGitFolder,
}) => {
  return (
    <div className="text-sm">
      {showGitFolder && (
        <div className="flex items-center py-1 px-2 hover:bg-[#2a2a2a] cursor-pointer">
          <span className="mr-2">📁</span>
          <span>.git</span>
        </div>
      )}
      <div className="flex items-center py-1 px-2 hover:bg-[#2a2a2a] cursor-pointer">
        <span className="mr-2">📁</span>
        <span>src</span>
      </div>
      <div className="flex items-center py-1 px-2 hover:bg-[#2a2a2a] cursor-pointer ml-4">
        <span className="mr-2">📄</span>
        <span>index.js</span>
      </div>
    </div>
  );
};
