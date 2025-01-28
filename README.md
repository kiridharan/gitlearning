# Git Learning App Development Guide

## Project Overview

An interactive web application for learning Git commands through hands-on practice with a visual interface and real-time feedback.

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- React Hot Toast
- Headless UI

## Project Structure

```
app/
├── components/
│ ├── FileExplorer.tsx # File system visualization
│ ├── GitLesson.tsx # Lesson content display
│ ├── GitVisualization.tsx # Git visualization component
│ ├── LessonsDialog.tsx # Lessons overview modal
│ ├── LoadingScreen.tsx # Loading state component
│ └── Terminal.tsx # Interactive terminal
├── store/
│ └── lessonStore.ts # Global state management
├── lessons/
│ └── lessonsData.ts # Lesson content and structure
└── types/
└── lessons.ts # TypeScript interfaces

```

## Core Features

1. **State Management**

   - Persistent lesson progress using localStorage
   - Git initialization state tracking
   - Task completion tracking

2. **Interactive Terminal**

   - Command validation
   - Real-time feedback
   - Command history

3. **Lesson System**
   - Module-based progression
   - Task completion tracking
   - Theory and practical lessons

## Development Setup

1. Install dependencies:

```bash
pnpm install
```

2. Run development server:

```bash
pnpm run dev
```

## Adding New Lessons

1. Update `lessonsData.ts` following the Task interface:

```typescript
interface LessonData {}
```

2. Ensure proper task ID sequencing
3. Add validation logic if required

## State Management

The application uses Zustand with persistence middleware:

- `currentModule`: Current lesson module
- `currentTask`: Current task within module
- `completedTasks`: Set of completed task IDs
- `isGitInitialized`: Git repository state

## Testing

1. Run tests:

```bash
pnpm test
```

2. Test new lessons:
   - Verify command validation
   - Check state transitions
   - Test persistence

````

```markdown:/Users/Kiridharan/Documents/kiri/gitlearning/CONTRIBUTING.md
# Contributing to Git Learning App

## Welcome
Thank you for considering contributing to the Git Learning App! This document outlines the process for contributing to the project.

## Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Help maintain a positive environment

## How to Contribute

### 1. Setting Up Development Environment
1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/your-username/gitlearning.git
````

3. Install dependencies:

```bash
pnpm install
```

### 2. Making Changes

1. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

2. Follow coding standards:

   - Use TypeScript
   - Follow existing code style
   - Add appropriate comments
   - Use meaningful variable names

3. Adding New Lessons:
   - Add lesson data in `lessons/lessonsData.ts`
   - Follow existing lesson structure
   - Include clear instructions
   - Add proper validation

### 3. Testing

1. Test your changes thoroughly
2. Ensure all existing features work
3. Check mobile responsiveness
4. Verify state persistence

### 4. Submitting Changes

1. Commit your changes:

```bash
git commit -m "feat: description of your changes"
```

2. Push to your fork:

```bash
git push origin feature/your-feature-name
```

3. Create a Pull Request:
   - Provide clear description
   - Reference related issues
   - Include screenshots if UI changes
   - List testing steps

### 5. Pull Request Guidelines

- Keep changes focused and atomic
- Update documentation if needed
- Follow commit message conventions
- Respond to review comments

## Bug Reports

- Use the issue tracker
- Include clear steps to reproduce
- Provide environment details
- Add screenshots if applicable

## Feature Requests

- Clearly describe the feature
- Explain the use case
- Provide example scenarios
- Consider implementation impact

## Questions?

Feel free to open an issue for any questions about contributing.

Thank you for contributing! 🎉

```

These documents provide a comprehensive guide for both development and contribution. Would you like me to expand on any specific section?
```
