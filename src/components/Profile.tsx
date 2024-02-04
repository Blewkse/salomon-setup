import React, { useState } from "react";
import profileShadow from "../assets/profile-shadow.svg";
import profileShape from "../assets/profile-shape.svg";

export default function Profile() {
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  return (
    <div
      className="flex items-center justify-center px-6 hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="presentation"
    >
      <div className="relative h-12 w-12 ">
        <img
          src={profileShape}
          alt="profile-shape"
          className={`absolute top-0 z-10 ${isHovered ? "-translate-y-0.5 -translate-x-0.5" : ""}  transition-transform ease-in 0.3s `}
        />
        <img
          src={profileShadow}
          alt="profile-shadow"
          className="absolute top-0.5 left-0.5"
        />
      </div>
    </div>
  );
}
