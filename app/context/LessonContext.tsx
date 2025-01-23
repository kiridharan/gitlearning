"use client";
import React, { createContext, useContext, useState } from "react";
import { LessonData } from "../types/lessons";

export const lessonData: LessonData = {
  lessons: [
    {
      module: "Introduction to Git",
      difficulty: "Beginner",
      tasks: [
        {
          id: 1,
          title: "What is Git?",
          description:
            "In this lesson, you will learn about Git, a distributed version control system, and why it's essential for managing source code. Git allows multiple developers to collaborate on a project, track changes, and maintain the integrity of code over time.",
          action: "Read a brief introduction to Git.",
          steps: [
            "Read through the definition of Git and its usage in software development.",
            "Understand the difference between centralized and distributed version control systems.",
            "Learn how Git tracks changes and allows for collaborative work.",
          ],
        },
        {
          id: 2,
          title: "Setting up Git",
          description:
            "This lesson covers how to install and configure Git on your system. You'll also configure Git with your personal user information, such as your name and email, which will be associated with your commits.",
          action: "Configure Git with your user information.",
          steps: [
            "Download and install Git on your system from the official Git website.",
            "Configure your user information using `git config --global user.name 'Your Name'` and `git config --global user.email 'your_email@example.com'`.",
          ],
        },
        {
          id: 3,
          title: "Creating a Git Repository",
          description:
            "Learn how to create a Git repository, which will serve as a container for tracking changes in your project. You'll also learn how to stage and commit files to the repository.",
          action: "Create your first Git repository.",
          steps: [
            "Use `git init` to create a new repository in your project directory.",
            "Add files to the staging area using `git add <filename>`.",
            "Commit the staged files to the repository using `git commit -m 'Initial commit'`.",
          ],
        },
      ],
    },
    {
      module: "Basic Git Commands",
      difficulty: "Beginner",
      tasks: [
        {
          id: 4,
          title: "Git Status and Staging Changes",
          description:
            "In this lesson, you'll learn how to check the status of your files and understand how to stage changes for committing. Git status gives you valuable information about the state of your working directory and staging area.",
          action: "Check the status of your files.",
          steps: [
            "Run `git status` to see which files have been modified, which are staged, and which are untracked.",
            "Stage a file using `git add <filename>` to prepare it for commit.",
          ],
        },
        {
          id: 5,
          title: "Committing Changes",
          description:
            "In this lesson, you will learn how to commit changes to your Git repository. Commits are snapshots of your project at a specific point in time, along with a message describing the changes made.",
          action: "Commit staged changes.",
          steps: [
            "Stage your changes with `git add`.",
            "Commit your changes with `git commit -m 'Commit message'`. The commit message should be clear and concise, describing the changes made.",
          ],
        },
        {
          id: 6,
          title: "Pushing Changes to Remote Repository",
          description:
            "Learn how to upload your local commits to a remote repository like GitHub or GitLab. Pushing changes ensures that other team members can access your work and collaborate more effectively.",
          action: "Push changes to a remote repository.",
          steps: [
            "Set up a remote repository (e.g., on GitHub) and copy its URL.",
            "Push your local commits to the remote repository using `git push origin main`.",
          ],
        },
      ],
    },
    {
      module: "Branching and Merging",
      difficulty: "Intermediate",
      tasks: [
        {
          id: 7,
          title: "Creating and Switching Branches",
          description:
            "This lesson introduces Git branches. You'll learn how to create a branch, switch between branches, and how branching helps you work on multiple features or bug fixes simultaneously without affecting the main codebase.",
          action: "Create and switch to a new branch.",
          steps: [
            "Create a new branch with `git branch <branch-name>`.",
            "Switch to the newly created branch with `git checkout <branch-name>`. Alternatively, use `git checkout -b <branch-name>` to create and switch in one command.",
          ],
        },
        {
          id: 8,
          title: "Merging Branches",
          description:
            "Merging allows you to bring changes from one branch into another. You'll learn how to merge a branch into the main branch and handle any potential conflicts that arise.",
          action: "Merge your branch into the main branch.",
          steps: [
            "Ensure you are on the branch you want to merge into (e.g., `main`).",
            "Run `git merge <branch-name>` to bring the changes from the other branch into your current branch.",
            "Resolve any merge conflicts if necessary by manually editing the conflicting files.",
          ],
        },
        {
          id: 9,
          title: "Branching Best Practices",
          description:
            "This lesson covers best practices for branching in Git. It emphasizes the importance of descriptive branch names, keeping branches small and focused, and merging frequently to avoid complicated merges later.",
          action: "Learn best practices for using Git branches.",
          steps: [
            "Use descriptive names for your branches, such as `feature/login-form` or `bugfix/header-logo`.",
            "Keep each branch focused on a single feature or bug fix to avoid confusion.",
            "Merge branches back into the main branch frequently to avoid diverging too much.",
          ],
        },
      ],
    },
    {
      module: "Collaboration and Remote Repositories",
      difficulty: "Intermediate",
      tasks: [
        {
          id: 10,
          title: "Forking and Cloning a Repository",
          description:
            "This lesson teaches how to fork a repository on GitHub (or other platforms) and clone it to your local machine. Forking allows you to contribute to a project without making changes to the original codebase.",
          action: "Fork and clone a GitHub repository.",
          steps: [
            "Go to a public repository on GitHub and click 'Fork' to create a copy of the repository under your GitHub account.",
            "Clone the forked repository to your local machine using `git clone <repo-url>`.",
          ],
        },
        {
          id: 11,
          title: "Pull Requests and Merging",
          description:
            "Learn how to contribute to an open-source project by creating a pull request (PR). You'll also learn the review process and how changes are merged into the main codebase.",
          action: "Submit a pull request to a remote repository.",
          steps: [
            "Create a branch and make changes in your forked repository.",
            "Push your changes to your remote fork with `git push`.",
            "Go to GitHub and create a pull request to propose your changes to the original repository.",
          ],
        },
        {
          id: 12,
          title: "Git Fetch, Pull, and Rebase",
          description:
            "Learn how to fetch the latest changes from the remote repository and incorporate those changes into your local repository. You'll also learn about rebase, a way to keep your commit history clean.",
          action: "Fetch and rebase changes.",
          steps: [
            "Run `git fetch` to fetch changes from the remote repository without merging them.",
            "Use `git pull` to fetch and automatically merge the changes into your local branch.",
            "Learn the difference between merging and rebasing, and how to use `git rebase` to apply your commits on top of the latest changes.",
          ],
        },
      ],
    },
    {
      module: "Advanced Git Topics",
      difficulty: "Advanced",
      tasks: [
        {
          id: 13,
          title: "Rebasing vs Merging",
          description:
            "In this lesson, you'll learn the difference between rebasing and merging. While both operations integrate changes from different branches, they do so in different ways and have different impacts on your commit history.",
          action: "Perform a rebase and a merge.",
          steps: [
            "Rebase a branch with `git rebase <branch-name>`.",
            "Merge a branch using `git merge <branch-name>`.",
            "Compare the results and understand when to use each operation.",
          ],
        },
        {
          id: 14,
          title: "Git Hooks",
          description:
            "Git hooks are scripts that Git runs before or after events like commits, merges, and pushes. This lesson will teach you how to set up custom Git hooks for automating tasks like linting or testing code before committing.",
          action: "Set up and use a Git hook.",
          steps: [
            "Navigate to the `.git/hooks` directory in your repository.",
            "Create a custom pre-commit hook to automatically lint your code before committing.",
            "Test the hook by making a commit.",
          ],
        },
        {
          id: 15,
          title: "Git Submodules",
          description:
            "Learn about Git submodules, which allow you to include external repositories within your own. This is useful when you need to include shared libraries or dependencies in your project.",
          action: "Add and manage Git submodules.",
          steps: [
            "Add a submodule to your repository with `git submodule add <repo-url>`.",
            "Update submodules with `git submodule update`.",
          ],
        },
      ],
    },
    {
      module: "Git Best Practices",
      difficulty: "All",
      tasks: [
        {
          id: 16,
          title: "Commit Message Best Practices",
          description:
            "Writing good commit messages is essential for maintaining a clear project history. This lesson explains the best practices for writing meaningful commit messages, which help collaborators understand changes.",
          action: "Write effective commit messages.",
          steps: [
            "Write commit messages in present tense, e.g., 'Fix bug in homepage layout' instead of 'Fixed bug in homepage layout'.",
            "Keep commit messages concise (under 50 characters) and use the body for additional details if necessary.",
          ],
        },
        {
          id: 17,
          title: "Maintaining Clean History",
          description:
            "This lesson teaches you how to maintain a clean Git history by squashing commits, rewriting history, and using interactive rebase to tidy up commits before pushing them.",
          action:
            "Rewrite history using `git rebase` and `git commit --amend`.",
          steps: [
            "Squash commits using `git rebase -i` to combine multiple commits into one.",
            "Use `git commit --amend` to modify the last commit message or changes.",
          ],
        },
        {
          id: 18,
          title: "Handling Merge Conflicts",
          description:
            "Merge conflicts occur when two branches make conflicting changes to the same line of code. This lesson will show you how to resolve merge conflicts manually and commit the resolved changes.",
          action: "Resolve a merge conflict.",
          steps: [
            "Merge two branches that have conflicting changes.",
            "Manually edit the conflicting files to resolve the issue, marking them as resolved.",
            "Commit the resolved changes using `git commit`.",
          ],
        },
      ],
    },
  ],
};
interface LessonContextType {
  currentModule: number;
  currentTask: number;
  setCurrentModule: (module: number) => void;
  setCurrentTask: (task: number) => void;
  completedTasks: Set<number>;
  markTaskCompleted: (taskId: number) => void;
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export function LessonProvider({ children }: { children: React.ReactNode }) {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set());

  const markTaskCompleted = (taskId: number) => {
    setCompletedTasks((prev) => new Set(Array.from(prev).concat(taskId)));
    // Auto advance to next task
    const nextTask = currentTask + 1;
    if (nextTask < lessonData.lessons[currentModule].tasks.length) {
      setCurrentTask(nextTask);
    }
  };

  return (
    <LessonContext.Provider
      value={{
        currentModule,
        currentTask,
        setCurrentModule,
        setCurrentTask,
        completedTasks,
        markTaskCompleted,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
}

export const useLessonContext = () => {
  const context = useContext(LessonContext);
  if (!context) {
    throw new Error("useLessonContext must be used within a LessonProvider");
  }
  return context;
};
