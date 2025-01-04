import React, { useState } from "react";
import {
  FolderIcon,
  DocumentIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

type FileSystemItem = {
  name: string;
  type: "file" | "folder";
  children?: FileSystemItem[];
};

const Sidebar = () => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["project"])
  );

  const folderStructure: FileSystemItem[] = [
    {
      name: "project",
      type: "folder",
      children: [
        {
          name: "src",
          type: "folder",
          children: [
            { name: "index.js", type: "file" },
            { name: "styles.css", type: "file" },
          ],
        },
        {
          name: "public",
          type: "folder",
          children: [{ name: "index.html", type: "file" }],
        },
        { name: "package.json", type: "file" },
        { name: "README.md", type: "file" },
      ],
    },
  ];

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const renderItem = (item: FileSystemItem, path: string = "") => {
    const currentPath = `${path}/${item.name}`;
    const isExpanded = expandedFolders.has(currentPath);
    const Icon =
      item.type === "folder"
        ? isExpanded
          ? ChevronDownIcon
          : ChevronRightIcon
        : DocumentIcon;

    return (
      <div key={currentPath}>
        <div
          className={`flex items-center py-1 px-2 hover:bg-gray-700 cursor-pointer ${
            item.type === "file" ? "pl-6" : ""
          }`}
          onClick={() => item.type === "folder" && toggleFolder(currentPath)}
        >
          <Icon className="w-4 h-4 mr-2 text-gray-500" />
          <span className="text-sm">{item.name}</span>
        </div>
        {item.type === "folder" && isExpanded && item.children && (
          <div className="ml-4">
            {item.children.map((child) => renderItem(child, currentPath))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full bg-gray-900 text-gray-300 overflow-auto">
      <div className="p-2 text-sm font-medium">EXPLORER</div>
      {folderStructure.map((item) => renderItem(item))}
    </div>
  );
};

export default Sidebar;
