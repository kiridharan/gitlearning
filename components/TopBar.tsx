import React from 'react'

const TopBar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-900 text-gray-300 p-2">
      <div className="flex items-center space-x-4">
        <span className="font-semibold">File</span>
        <span className="font-semibold">Edit</span>
        <span className="font-semibold">View</span>
        <span className="font-semibold">Go</span>
        <span className="font-semibold">Run</span>
        <span className="font-semibold">Terminal</span>
        <span className="font-semibold">Help</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm">Git Learning Environment</span>
      </div>
    </div>
  )
}

export default TopBar

