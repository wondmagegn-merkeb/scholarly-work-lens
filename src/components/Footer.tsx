import React from 'react';
import { BookOpen } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">StudentPortfolio</span>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Alex Rivera. All rights reserved. 
          <br />
          Built with React 19 and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};