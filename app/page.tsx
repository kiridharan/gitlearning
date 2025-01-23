"use client";

import FileExplorer from "./components/FileExplorer";
import GitVisualization from "./components/GitVisualization";
import GitLesson from "./components/GitLesson";
import Terminal from "./components/Terminal";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function ResizeHandle({ className = "" }: { className?: string }) {
  return (
    <PanelResizeHandle
      className={`w-2 hover:bg-blue-600 bg-[#2a2a2a] transition-colors ${className}`}
    />
  );
}

export default function Home() {
  return (
    <main className="h-screen">
      <PanelGroup direction="vertical">
        <Panel defaultSize={80} minSize={30}>
          <PanelGroup direction="horizontal">
            <Panel defaultSize={20} minSize={15}>
              <div className="h-full bg-[#1e1e1e] border-r border-[#333333]">
                <div className="p-2 text-gray-300">
                  <h2 className="font-semibold mb-2">Explorer</h2>
                  <FileExplorer />
                </div>
              </div>
            </Panel>

            <ResizeHandle />

            <Panel defaultSize={50} minSize={30}>
              <div className="h-full bg-[#1e1e1e] border-r border-[#333333]">
                <div className="h-full p-4">
                  <GitVisualization />
                </div>
              </div>
            </Panel>

            <ResizeHandle />

            <Panel defaultSize={30} minSize={20}>
              <div className="h-full bg-[#1e1e1e]">
                <div className="h-full p-4 text-gray-300">
                  <GitLesson />
                </div>
              </div>
            </Panel>
          </PanelGroup>
        </Panel>

        <ResizeHandle className="h-2 w-full cursor-row-resize" />

        <Panel defaultSize={20} minSize={10}>
          <div className="h-full bg-[#1e1e1e] border-t border-[#333333]">
            <div className="p-2 bg-[#252526] text-gray-300 h-full">
              <div className="font-mono h-full">
                <Terminal />
              </div>
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </main>
  );
}
