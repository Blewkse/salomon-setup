import React from "react";
import skiUpBend from "../assets/skiupBend.svg";
import Header from "./Header.tsx";

export default function App() {
  return (
    <div>
      <div className="absolute w-screen h-screen bg-white top-0 z-0 flex align-center justify-center">
        <img src={skiUpBend} alt="svg ski up bend" />
      </div>
      <div className="z-10 absolute top-0 w-screen flex flex-row align-center justify-center">
        <Header />
      </div>
    </div>
  );
}
