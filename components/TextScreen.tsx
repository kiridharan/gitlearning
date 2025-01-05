import React from "react";

const TextScreen = () => {
  return (
    <div className="h-full p-8 bg-gray-800 text-gray-300 overflow-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-400">
        Welcome to Git Learning
      </h1>
      <p className="text-lg mb-4">
        Git is a distributed version control system that helps you track changes
        in your code and collaborate with others. In this interactive
        environment, you&lsquo;ll learn the basics of Git and how to use it
        effectively in your projects.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-green-400">
        Key Concepts:
      </h2>
      <ul className="list-disc list-inside mt-2 space-y-2">
        <li>Initialize a repository</li>
        <li>Make and commit changes</li>
        <li>Create and switch branches</li>
        <li>Merge changes</li>
        <li>Collaborate with others</li>
      </ul>
      <p className="mt-6 text-yellow-300">
        Use the terminal below to practice Git commands and see how they affect
        your project structure.
      </p>
    </div>
  );
};

export default TextScreen;
