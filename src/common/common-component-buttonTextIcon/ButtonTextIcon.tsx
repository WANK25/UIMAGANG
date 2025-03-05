import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  className?: string;
  text?: string;
  onClick?: () => void;
}

function ButtonTextIcon({ icon, text, className = "", onClick }: ButtonProps) {
  return (
    <button
      data-testid="button-text-icon"
      onClick={onClick}
      className={`h-8 border-none px-2 rounded-lg cursor-pointer flex gap-2 items-center justify-center ${className}`}
    >
      {icon && <span data-testid="button-icon">{icon}</span>}
      {text && <p className="text-white">{text}</p>}
    </button>
  );
}

export default ButtonTextIcon;
