import React, { useMemo, useState } from "react";
import skiUpBend from "../assets/skiupBend.svg";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Items from "./Items.tsx";
import ListingBar from "./ListingBar.tsx";
import CategoryContext from "../hooks/context/CategoryContext.ts";

export default function App() {
  const [filterCategory, setFilterCategory] = useState<string>("");

  const catMemo = useMemo(
    () => ({
      filterCategory,
      setFilterCategory,
    }),
    [filterCategory]
  );

  return (
    <div className="relative top-0 left-0 w-screen h-screen flex flex-col">
      <div className="absolute w-screen h-screen bg-background top-0 z-0 flex align-center justify-center">
        <img src={skiUpBend} alt="svg ski up bend" />
      </div>
      <CategoryContext.Provider value={catMemo}>
        <ListingBar />
        <div className=" z-10 w-screen flex flex-row align-center justify-center">
          <Header />
        </div>
        <div className="w-full h-full flex items-end justify-center">
          <Items />
        </div>
      </CategoryContext.Provider>
      <Footer />
    </div>
  );
}
