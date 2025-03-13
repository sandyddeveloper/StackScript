import React from "react";

export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg">
        {children}
      </table>
    </div>
  );
}

export function Thead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-100">{children}</thead>;
}

export function Tbody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-gray-300">{children}</tbody>;
}

export function Tr({ children }: { children: React.ReactNode }) {
  return <tr className="border-b border-gray-200">{children}</tr>;
}

export function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-2 text-left text-gray-600 font-semibold">{children}</th>
  );
}

export function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-2 text-gray-800">{children}</td>;
}
