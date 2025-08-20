import React from "react";

interface CountProps {
  count: number;
  label: string;
}

export default function Count({ count, label }: CountProps) {
  return (
    <p className="text-gray-700 text-xl font-semibold">
      {label}: <span className="text-blue-700">{count}</span>
    </p>
  );
}
