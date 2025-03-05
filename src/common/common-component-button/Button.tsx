import React from "react";

interface ButtonProps {
  icon?: React.ReactNode; // Untuk ikon opsional
  className?: string; // Custom class untuk styling tambahan
  onClick: () => void;
}

function Button({ icon, className = "", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={` w-8 h-8 border py-4 px-2 cursor-pointer rounded-lg flex items-center justify-center ${className}`}
    >
      {icon && <span data-testid="button-icon">{icon}</span>}
    </button>
  );
}

export default Button;
