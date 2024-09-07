import React from 'react';
import { Button } from '@shadcn/ui';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Ignored AI - Tab Manager</h1>
      <Button onClick={() => alert('Manage Tabs!')} className="mt-4">
        Manage Tabs
      </Button>
    </div>
  );
}
