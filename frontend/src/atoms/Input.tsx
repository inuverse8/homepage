import React from "react";
import { PRIMARY_BG_COLOR, PRIMARY_TEXT_COLOR } from "../index";

type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ 
  type = "text", 
  placeholder = "検索ワードを入力", 
  value, 
  onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        px-3 
        py-2 
        border 
        border-gray-300 
        rounded 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        ${PRIMARY_BG_COLOR} 
        ${PRIMARY_TEXT_COLOR}`}
    />
  );
};

export default Input;
