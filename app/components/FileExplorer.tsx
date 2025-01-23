import React from "react";

export default function FileExplorer() {
  return (
    <div className="text-sm">
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
}
