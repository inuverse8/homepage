import React from "react";

type TextOverlayProps = {
  text: string;
  textColor?: string;
  position?: string; // 文字位置をカスタマイズできるように
  padding?: string; // 余白を調整できるように
  background?: string; // 背景色（オーバーレイの濃さ）
  textSize?: string; // 文字サイズの変更
};

const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  textColor = "text-white",
  position = "items-center justify-start",
  padding = "pl-10",
  background = "bg-black/30",
  textSize = "text-6xl",
}) => {
  return (
    <div className={`absolute inset-0 flex ${position} ${padding} ${textColor} ${textSize} font-bold ${background}`}>
      {text}
    </div>
  );
};

export default TextOverlay;
