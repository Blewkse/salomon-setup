import React from "react";
import SearchBar from "./SearchBar.tsx";
import Profile from "./Profile.tsx";

export default function Header() {
  return (
    <div className="w-96 flex flex-row items-center justify-between h-20 border-2 border-ternary">
      <Profile />
      <div className="w-full h-full bg-gradient-to-t from-primary to-secondary" />
      <SearchBar />
    </div>
  );
}
