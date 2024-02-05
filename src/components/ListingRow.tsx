import React from "react";

import maleSexIcon from "../assets/male-sex.svg";
import femaleSexIcon from "../assets/female-sex.svg";

import headsetPhotoImage from "../assets/headset-image.png";
import maskPhotoImage from "../assets/mask-image.png";
import shoesPhotoImage from "../assets/shoes-image.png";
import skisPhotoImage from "../assets/skis-image.png";
import sticksPhotoImage from "../assets/sticks-image.png";

type Props = {
  name: string;
  sex: boolean;
  price: number;
  type: string;
};

export default function ListingRow({ name, sex, price, type }: Props) {
  const selectItemPhoto = () => {
    switch (type) {
      case "Headset":
        return headsetPhotoImage;
      case "Mask":
        return maskPhotoImage;
      case "Shoes":
        return shoesPhotoImage;
      case "Skis":
        return skisPhotoImage;
      case "Sticks":
        return sticksPhotoImage;
      default:
        return shoesPhotoImage;
    }
  };

  return (
    <div className="relative w-full h-12 flex flex-row bg-transparent items-center justify-left gap-2 px-2">
      <img src={selectItemPhoto()} alt="item-row" className="h-full w-1/5" />
      <span className="text-ternary max-w-3/5 text-nowrap overflow-hidden">
        {name}
      </span>
      <img src={sex ? maleSexIcon : femaleSexIcon} alt="sex" className="w-6" />
      <span className="text-ternary">{price}$</span>
    </div>
  );
}
