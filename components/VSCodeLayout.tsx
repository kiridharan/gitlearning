"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TextScreen from "./TextScreen";
import Terminal from "./Terminal";
import TopBar from "./TopBar";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const VSCodeLayout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [terminalHeight, setTerminalHeight] = useState(200);

  const handleSidebarResize = (e: React.MouseEvent) => {
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + e.clientX - startX;
      setSidebarWidth(Math.max(200, Math.min(newWidth, 400)));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTerminalResize = (e: React.MouseEvent) => {
    const startY = e.clientY;
    const startHeight = terminalHeight;

    const handleMouseMove = (e: MouseEvent) => {
      const newHeight = startHeight - (e.clientY - startY);
      setTerminalHeight(
        Math.max(100, Math.min(newHeight, window.innerHeight - 200))
      );
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 text-gray-300">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <div style={{ width: sidebarWidth }} className="flex-shrink-0">
          <Sidebar />
        </div>
        <div
          className="w-1 bg-gray-700 cursor-col-resize"
          onMouseDown={handleSidebarResize}
        />
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-auto">
            <TextScreen />
          </div>
          <div
            className="h-1 bg-gray-700 cursor-row-resize"
            onMouseDown={handleTerminalResize}
          />
          <div style={{ height: terminalHeight }} className="overflow-hidden">
            <div className="bg-gray-900 text-white p-2 flex items-center">
              <ChevronDownIcon className="h-4 w-4 mr-2" />
              <span className="text-sm">TERMINAL</span>
            </div>
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSCodeLayout;
