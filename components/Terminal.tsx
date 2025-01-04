import React, { useState, useRef, useEffect } from 'react'

const Terminal = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>(['Welcome to the Git terminal. Type "help" for a list of commands.'])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [output])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOutput([...output, `$ ${input}`, 'Command executed (simulated)'])
    setInput('')
  }

  return (
    <div className="h-full bg-gray-900 text-green-500 font-mono overflow-auto p-2">
      <div className="mb-4">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent text-green-500 outline-none"
          placeholder="Enter Git command..."
        />
      </form>
      <div ref={bottomRef} />
    </div>
  )
}

export default Terminal

