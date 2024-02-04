import React, { useRef } from "react";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className="flex items-center justify-center px-6"
      onClick={handleDivClick}
      onKeyDown={handleDivClick}
      role="presentation"
    >
      <div className="relative h-12 border-2 w-fit border-secondary ">
        <div className="flex relative flex-row w-full h-full gap-2 bg-primary p-2 z-30 hover:cursor-pointer">
          <img src="/magnifyingglass.svg" alt="Search icon" />
          <input
            type="text"
            className="bg-transparent hover:cursor-pointer focus-visible:outline-0 w-10 z-20 text-secondary transition-all duration-300 ease-in-out focus-visible:w-52"
            ref={inputRef}
          />
        </div>
        <div className="absolute w-full h-full bg-secondary top-1 left-1 z-0" />
      </div>
    </div>
  );
}
