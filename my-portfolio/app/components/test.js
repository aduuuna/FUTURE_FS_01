'use client'

import { useTheme } from './ThemeProvider';

export default function ThemeTest() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="p-4 bg-white dark:bg-black text-black dark:text-white">
      <p>Current theme: {theme}</p>
      <button 
        onClick={toggleTheme}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}