import React from 'react';

export default function GitVisualization() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-gray-300">
        {/* You can add an SVG or Canvas element here for Git visualization */}
        <div className="text-center">
          <div className="inline-block p-4 rounded-full border-2 border-blue-500 mb-4">main</div>
          <div className="h-8 w-0.5 bg-blue-500 mx-auto"></div>
          <div className="inline-block p-4 rounded-full border-2 border-green-500">HEAD</div>
        </div>
      </div>
    </div>
  );
}