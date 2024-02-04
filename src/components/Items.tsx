import React from "react";
import ItemCase from "./ItemCase.tsx";

import headsetBackgroundImage from "../assets/headset-background.svg";
import headsetItemSticker from "../assets/headset-sticker.svg";
import headsetPhotoImage from "../assets/headset-image.png";

import maskBackgroundImage from "../assets/mask-background.svg";
import maskItemSticker from "../assets/mask-sticker.svg";
import maskPhotoImage from "../assets/mask-image.png";

import shoesBackgroundImage from "../assets/shoes-background.svg";
import shoesItemSticker from "../assets/shoes-sticker.svg";
import shoesPhotoImage from "../assets/shoes-image.png";

import skisBackgroundImage from "../assets/skis-background.svg";
import skisItemSticker from "../assets/skis-sticker.svg";
import skisPhotoImage from "../assets/skis-image.png";

import sticksBackgroundImage from "../assets/sticks-background.svg";
import sticksItemSticker from "../assets/sticks-sticker.svg";
import sticksPhotoImage from "../assets/sticks-image.png";

export default function Items() {
  return (
    <div className=" relative flex items-end justify-center flex-row w-custom-700 h-custom-450 ">
      <div className="flex flex-col basis-4/5 h-full">
        <div className="flex flex-row pl-20 w-full basis-5/12">
          <ItemCase
            backgroundImage={headsetBackgroundImage}
            itemSticker={headsetItemSticker}
            photoImage={headsetPhotoImage}
          />
          <ItemCase
            backgroundImage={maskBackgroundImage}
            itemSticker={maskItemSticker}
            photoImage={maskPhotoImage}
          />
        </div>
        <div className="flex flex-row w-full basis-7/12">
          <ItemCase
            backgroundImage={shoesBackgroundImage}
            itemSticker={shoesItemSticker}
            photoImage={shoesPhotoImage}
          />
          <ItemCase
            backgroundImage={skisBackgroundImage}
            itemSticker={skisItemSticker}
            photoImage={skisPhotoImage}
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-12 basis-1/5 h-full">
        <ItemCase
          backgroundImage={sticksBackgroundImage}
          itemSticker={sticksItemSticker}
          photoImage={sticksPhotoImage}
        />
      </div>
    </div>
  );
}
