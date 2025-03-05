"use client";

import LessonsDialog from "./components/LessonsDialog";
import GitVisualization from "./components/GitVisualization";
import GitLesson from "./components/GitLesson";
import Terminal from "./components/Terminal";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useLessonStore } from "./store/lessonStore";
import { toast } from "react-hot-toast";
// import { FileExplorer } from "./components/FileExplorer";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";
import Tour from "./components/Tour";
import { useEffect } from "react";

export default function Home() {
  const isLoading = useLessonStore((state) => state.isLoading);
  const currentModule = useLessonStore((state) => state.currentModule);
  // const isGitInitialized = useLessonStore((state) => state.isGitInitialized);
  const [showLessons, setShowLessons] = useState(true);
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setShowTour(true);
    }
  }, []);

  const handleTourComplete = () => {
    setShowTour(false);
    alert("Tour completed 4");
    localStorage.setItem("hasSeenTour", "true");
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  const showVisualization = currentModule > 0;

  return (
    <>
      {showTour && <Tour onComplete={handleTourComplete} />}
      <LessonsDialog
        isOpen={showLessons}
        onClose={() => setShowLessons(false)}
      />
      <main className="h-screen">
        <PanelGroup direction="vertical">
          <Panel defaultSize={80} minSize={30}>
            <PanelGroup direction="horizontal">
              {/* <Panel defaultSize={20} minSize={15}>
                <div
                  id="file-explorer"
                  className="h-full bg-[#1e1e1e] border-r border-[#333333]"
                >
                  <div className="p-2 text-gray-300">
                    <h2 className="font-semibold mb-2">Explorer</h2>
                    <FileExplorer showGitFolder={isGitInitialized} />
                  </div>
                </div>
              </Panel> */}

              {/* <PanelResizeHandle /> */}

              <Panel defaultSize={50} minSize={30}>
                <div
                  id="git-visualization"
                  className="h-full bg-[#1e1e1e] border-r border-[#333333]"
                >
                  <div className="h-full p-4">
                    {showVisualization ? (
                      <GitVisualization />
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-gray-300 space-y-4">
                        <div className="text-center space-y-2">
                          <h3 className="text-xl font-semibold">
                            Welcome to Git Learning
                          </h3>
                          <p className="text-gray-500 max-w-md">
                            Learn the fundamentals of Git version control
                            system. Let&apos;s start by understanding what Git
                            is and creating your first repository.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            useLessonStore.getState().setCurrentModule(1);
                            // useLessonStore.setState().completedTasks
                            toast.success("Let's begin learning Git!");
                          }}
                          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Get Started
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Panel>

              <PanelResizeHandle />

              <Panel defaultSize={30} minSize={20}>
                <div id="git-lesson" className="h-full bg-[#1e1e1e]">
                  <div className="h-full p-4 text-gray-300">
                    <GitLesson />
                  </div>
                </div>
              </Panel>
            </PanelGroup>
          </Panel>

          <PanelResizeHandle className="h-2 w-full cursor-row-resize" />

          <Panel defaultSize={20} minSize={10}>
            <div
              id="git-terminal"
              className="h-full bg-[#1e1e1e] border-t border-[#333333]"
            >
              <div className="p-2 bg-[#252526] text-gray-300 h-full">
                <div className="font-mono h-full">
                  <Terminal />
                </div>
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </main>
    </>
  );
}
