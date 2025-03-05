import React from "react";

interface ButtonProps {
  icon?: React.ReactNode; // Untuk ikon opsional
  className?: string; // Custom class untuk styling tambahan

  text?: string;
}

function Input({ icon, text, className = "" }: ButtonProps) {
  return (
    <div
      className={`p-2 bg-blackDDS rounded-lg overflow-hidden flex justify-between items-center  gap-2.5 ${className} `}
    >
      <input
        type="text"
        className={`font-medium text-base flex-1 min-w-0 focus:outline-none`}
        placeholder={text}
      />
      {icon}
    </div>
  );
}

export default Input;
