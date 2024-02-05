import React, { useState } from "react";

type Props = {
  backgroundImage: string;
  itemSticker: string;
  photoImage: string;
  onClick: () => void;
};

export default function ItemCase({
  backgroundImage,
  itemSticker,
  photoImage,
  onClick,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: `${isHovered ? "180% 180%" : "140% 140%"}`,
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative h-full w-full bg-ternary border-2 border-white flex items-center justify-center transition-all duration-300 ease-out overflow-hidden hover:cursor-pointer"
      style={divStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => onClick()}
      role="presentation"
    >
      <img src={itemSticker} alt="sticker" className="z-10" />
      <img
        src={photoImage}
        alt="true"
        className={`absolute z-20 w-full h-full transition-transform delay-200 ease-out 0.3s ${isHovered ? "translate-y-0" : "translate-y-full"}`}
      />
    </div>
  );
}
