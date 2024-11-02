import React, { useState } from 'react';

export default function ChatInterface() {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // Handle message submission
      setInput('');
    }
  };

  return (
    <div className="bg-[var(--color-card)] rounded-lg h-full flex flex-col">
      <div className="p-4 border-b border-[var(--color-border)]">
        <h2 className="font-bold">Calsense AI</h2>
        <p className="text-sm text-gray-400">Hello how can I help you today?</p>
      </div>
      
      <div className="flex-1"></div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--color-border)]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Your Prompt"
          className="w-full bg-[var(--color-bg)] text-white rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </form>
    </div>
  );
}