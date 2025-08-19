import React from "react";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
