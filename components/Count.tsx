import React from "react";

interface CountProps {
  count: number;
  label: string;
}

export default function Count({ count, label }: CountProps) {
  return (
    <div>
      <h2 className="text-blue-700 text-5xl font-bold text-center">{count}</h2>
      <p className="text-gray-700 text-xl font-bold text-center">{label}</p>
    </div>
  );
}
