import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { AnimatePresence } from 'framer-motion';
export function App() {
  return <div className="bg-gray-50 min-h-screen w-full text-gray-800 font-sans">
      <AnimatePresence>
        <Dashboard />
      </AnimatePresence>
    </div>;
}