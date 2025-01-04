import React from 'react'
import Sidebar from './Sidebar'
import TextScreen from './TextScreen'
import Terminal from './Terminal'

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-1/2 border-r border-gray-300">
        <div className="h-1/2 border-b border-gray-300">
          <TextScreen />
        </div>
        <div className="h-1/2">
          <Terminal />
        </div>
      </div>
      <div className="w-1/2">
        <Sidebar />
      </div>
    </div>
  )
}

export default Layout

