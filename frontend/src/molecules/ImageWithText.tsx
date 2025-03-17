import React from "react";
import TextOverlay from "../atoms/TextOverlay";

type ImageWithTextProps = {
  imageSrc: string;
  altText: string;
  overlayText: string;
  textColor?: string;
  position?: string; // 文字位置カスタマイズ
  padding?: string; // 文字の余白
  background?: string; // オーバーレイの背景
  textSize?: string; // 文字のサイズ
  imgSize?: string; // 画像サイズを変更しやすく
};

const ImageWithText: React.FC<ImageWithTextProps> = ({
  imageSrc,
  altText,
  overlayText,
  textColor,
  position,
  padding,
  background,
  textSize,
  imgSize = "w-full h-auto", // 画像サイズのデフォルト
}) => {
  return (
    <div className="relative">
      {/* 画像 */}
      <img src={imageSrc} alt={altText} className={imgSize} />
      {/* オーバーレイテキスト */}
      <TextOverlay
        text={overlayText}
        textColor={textColor}
        position={position}
        padding={padding}
        background={background}
        textSize={textSize}
      />
    </div>
  );
};

export default ImageWithText;
