// components/custom-markdown-elements.tsx

import React from "react";

export const Tip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4">
    <p className="font-bold">Tip</p>
    {children}
  </div>
);

export const Error: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
    <p className="font-bold">Error</p>
    {children}
  </div>
);

export const Note: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
    <p className="font-bold">Note</p>
    {children}
  </div>
);
