import { LessonData } from "../types/lessons";

export const lessonData: LessonData = {
  welcome: {
    firstTime:
      "Welcome to Git Learning! Let's start by understanding what Git is and why it's important.",
    returning: "Welcome back! Continuing from where you left off.",
  },
  lessons: [
    {
      module: "Introduction to Git",
      difficulty: "Beginner",
      type: "theory",
      tasks: [
        {
          id: 1,
          title: "What is Git?",
          description:
            "In this lesson, you will learn about Git, a distributed version control system, and why it's essential for managing source code.",
          action: "Read through the introduction",
          type: "reading",
          content: [
            {
              title: "Understanding Git",
              text: "Git is a distributed version control system that helps developers track changes in their code. Unlike traditional version control systems, Git gives each developer a complete copy of the repository.",
              link: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
            },
            {
              title: "Why Use Git?",
              text: "Git allows multiple developers to work on the same project without conflicts, track changes over time, and maintain different versions of code simultaneously.",
              link: "https://git-scm.com/about",
            },
          ],
          steps: [
            "Read about Git's distributed nature",
            "Understand basic Git concepts",
            "Review the benefits of version control",
          ],
        },
      ],
    },
    {
      module: "Basic Git Setup",
      difficulty: "Beginner",
      type: "practical",
      tasks: [
        {
          id: 2.1,
          title: "Creating Your First Repository",
          description:
            "Let's create your first Git repository and understand its structure.",
          action: "Initialize a Git repository",
          type: "command",
          cmd: "git init",
          expectedOutput: "Initialized empty Git repository",
          hint: "This command creates a new .git folder in your current directory",
          content: [
            {
              title: "Understanding .git folder",
              text: "When you run git init, Git creates a .git directory that contains all the necessary repository files. This is where Git stores all its tracking information.",
              link: "https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository",
            },
          ],
          steps: [
            "Open your terminal in your project directory",
            "Run git init to create a new repository",
            "Notice the creation of the .git folder (it might be hidden)",
            "This folder will store all Git-related information",
          ],
          validation: (output: string) =>
            output.toLowerCase().includes("initialized"),
        },
        {
          id: 2,
          title: "Configuring Git",
          description: "Let's set up Git with your information.",
          action: "Configure your Git username",
          type: "command",
          cmd: 'git config --global user.name "Your Name"',
          expectedOutput: "Configuration successful",
          hint: "Replace 'Your Name' with your actual name",
          validation: (output: string) =>
            output.includes("Configuration successful"),
          steps: [
            "Open your terminal",
            "Run the git config command",
            "Verify your configuration",
          ],
        },
        {
          id: 3,
          title: "Setting Email",
          description: "Configure your email for Git commits",
          action: "Set your Git email",
          type: "command",
          cmd: 'git config --global user.email "your.email@example.com"',
          expectedOutput: "Email configured successfully",
          hint: "Use your actual email address",
          validation: (output: string) =>
            output.includes("configured successfully"),
          steps: [
            "Open your terminal",
            "Run the git config command with your email",
            "Verify your email configuration",
          ],
        },
      ],
    },
    {
      module: "Basic Git Commands",
      difficulty: "Beginner",
      type: "practical",
      tasks: [
        {
          id: 4,
          title: "Git Status",
          description: "Learn to check the status of your repository",
          action: "Check repository status",
          type: "command",
          cmd: "git status",
          expectedOutput: "On branch main",
          hint: "This command shows the current state of your working directory",
          validation: (output: string) => output.includes("On branch"),
          steps: [
            "Open your terminal",
            "Navigate to your git repository",
            "Run git status command",
          ],
        },
        {
          id: 5,
          title: "Git Add",
          description: "Stage changes for commit",
          action: "Stage a file",
          type: "command",
          cmd: "git add .",
          expectedOutput: "Changes staged for commit",
          hint: "This will stage all changes in the current directory",
          validation: (output: string) => true,
          steps: [
            "Make some changes to your files",
            "Run git add command",
            "Verify staged changes with git status",
          ],
        },
        {
          id: 6,
          title: "Git Commit",
          description: "Commit your staged changes",
          action: "Create a commit",
          type: "command",
          cmd: 'git commit -m "Initial commit"',
          expectedOutput: "Created initial commit",
          hint: "Use a descriptive commit message",
          validation: (output: string) => output.includes("commit"),
          steps: [
            "Ensure changes are staged",
            "Run git commit command",
            "Verify commit with git log",
          ],
        },
      ],
    },
    // ... Would you like me to continue with the rest of the modules?
  ],
};
