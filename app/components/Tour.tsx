import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

interface TourProps {
  onComplete: () => void;
}

export default function Tour({ onComplete }: TourProps) {
  useEffect(() => {
    const driverObj = driver({
      showProgress: true,
      onDestroyStarted: () => {
        onComplete();
        return true; // Allow destruction
      },
      onDestroyed: () => {
        onComplete();
        return true; // Allow destruction
      },
      steps: [
        // {
        //   element: '#file-explorer',
        //   popover: {
        //     title: 'File Explorer',
        //     description: 'View your project files and Git-related folders here.',
        //     side: 'right',
        //   }
        // },
        {
          element: "#git-visualization",
          popover: {
            title: "Git Visualization",
            description:
              "Watch your Git actions come to life with visual representations.",
            side: "bottom",
          },
        },
        {
          element: "#git-lesson",
          popover: {
            title: "Lesson Panel",
            description: "Follow step-by-step lessons to master Git concepts.",
            side: "left",
          },
        },
        {
          element: "#git-terminal",
          popover: {
            title: "Terminal",
            description: "Practice Git commands in this interactive terminal.",
            side: "top",
          },
        },
      ],
    });

    driverObj.drive();

    return () => {
      driverObj.destroy();
    };
  }, [onComplete]);

  return null;
}
