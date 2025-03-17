import React from "react";
import { SECONDARY_BG_STRESSED_COLOR } from "../index";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={`
      px-4 
      py-2 
      ${SECONDARY_BG_STRESSED_COLOR}
      rounded
      transition-colors
      `} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
