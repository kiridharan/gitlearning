import FileExplorer from "./components/FileExplorer";
import GitVisualization from "./components/GitVisualization";
import GitLesson from "./components/GitLesson";
import { LessonProvider } from "./context/LessonContext";
import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <LessonProvider>
      <main className="h-screen flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <div className="w-64 bg-[#1e1e1e] border-r border-[#333333]">
            <div className="p-2 text-gray-300">
              <h2 className="font-semibold mb-2">Explorer</h2>
              <FileExplorer />
            </div>
          </div>

          <div className="flex-1 bg-[#1e1e1e] border-r border-[#333333]">
            <div className="h-full p-4">
              <GitVisualization />
            </div>
          </div>

          <div className="w-80 bg-[#1e1e1e]">
            <div className="h-full p-4 text-gray-300">
              <GitLesson />
            </div>
          </div>
        </div>

        <div className="h-48 bg-[#1e1e1e] border-t border-[#333333]">
          <div className="p-2 bg-[#252526] text-gray-300">
            <div className="font-mono">
              <Terminal />
            </div>
          </div>
        </div>
      </main>
    </LessonProvider>
  );
}
