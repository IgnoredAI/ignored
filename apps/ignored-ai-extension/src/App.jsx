import React from 'react';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Ignored AI - Tab Manager</h1>
      <button onClick={() => alert('Manage Tabs!')} className="mt-4">
        Manage Tabs
      </button>
    </div>
  );
}
