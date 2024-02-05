import React, { useContext, useEffect, useState } from "react";

import maleSexIcon from "../assets/male-sex.svg";
import femaleSexIcon from "../assets/female-sex.svg";
import sortSalomon from "../assets/sort-salomon.svg";
import chevronTop from "../assets/chevron-top.svg";
import chevronBottom from "../assets/chevron-bottom.svg";
import useGetData from "../hooks/useGetData.ts";
import ListingRow from "./ListingRow.tsx";

import CategoryContext from "../hooks/context/CategoryContext.ts";

type Data = {
  name: string;
  sex: boolean;
  price: number;
  image: string;
  type: string;
};

export default function ListingBar() {
  const [sex, setSex] = useState(true);
  const [data, setData] = useState<Data[]>([]);
  const [sortingType, setSortingType] = useState<boolean>(false);

  const [isListOpened, setIsListOpened] = useState<boolean>(false);

  const { data: fetchedData, isLoading } = useGetData();

  const categoryContext = useContext(CategoryContext);

  useEffect(() => {
    if (categoryContext?.filterCategory != "") {
      setData(
        fetchedData.filter(
          (elem) => elem.type === categoryContext?.filterCategory
        )
      );
    }
  }, [categoryContext?.filterCategory]);

  const filterDataBySex = () => fetchedData.filter((elem) => elem.sex === sex);

  const descendentPriceSorting = (tab: Data[]) =>
    tab.sort((a: Data, b: Data) => b.price - a.price);

  const ascendentPriceSorting = (tab: Data[]) =>
    tab.sort((a: Data, b: Data) => a.price - b.price);

  useEffect(() => {
    if (fetchedData) {
      const sexFilterData = filterDataBySex();
      setData(descendentPriceSorting(sexFilterData));
    }
  }, [fetchedData]);

  useEffect(() => {
    const sortedData = sortingType
      ? ascendentPriceSorting(data)
      : descendentPriceSorting(data);
    setData(sortedData);
  }, [sortingType]);

  useEffect(() => {
    categoryContext?.setFilterCategory("");
    const sexFilterData = filterDataBySex();
    const sortedData = sortingType
      ? ascendentPriceSorting(sexFilterData)
      : descendentPriceSorting(sexFilterData);
    setData(sortedData);
  }, [sex]);

  return (
    <div
      className={`absolute left-1/10 flex flex-col w-1/5 h-full bg-backgroundSecond z-30 border-2 border-secondary transition-transform ease-in-out duration-300 ${isListOpened ? "translate-y-100" : "-translate-y-90/"}`}
    >
      <div className="flex w-full h-24 bg-secondary flex-row p-4 items-end justify-evenly">
        <div className="relative w-10 h-10">
          <div
            className="relative w-full h-full bg-ternary flex items-center transition-transform ease-out 0.2s justify-center z-10 hover:cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover"
            onClick={() => setSex(!sex)}
            role="presentation"
          >
            {sex ? (
              <img
                src={maleSexIcon}
                alt="male icon"
                className="w-full h-full z-20 p-2"
              />
            ) : (
              <img
                src={femaleSexIcon}
                alt="female icon"
                className="w-full h-full z-20 p-2"
              />
            )}
          </div>
          <div className=" absolute top-1 left-1 w-full h-full bg-primary flex items-center justify-center z-0 border-2 border-ternary" />
        </div>
        <span className="self-start font-mono font-bold text-3xl mx-4 text-primary">
          {categoryContext?.filterCategory
            ? categoryContext?.filterCategory
            : "ALL"}
        </span>
        <div className="relative w-10 h-10">
          <div
            className="relative w-full h-full bg-ternary flex items-center transition-transform ease-out 0.2s justify-center z-10 hover:cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover"
            onClick={() => setSortingType(!sortingType)}
            role="presentation"
          >
            <img
              src={sortSalomon}
              alt="sort icon"
              className="w-full h-full z-20 p-2"
            />
          </div>
          <div className=" absolute top-1 left-1 w-full h-full bg-primary flex items-center justify-center z-0 border-2 border-ternary" />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        {isLoading ? (
          <span className="text-ternary">Loading...</span>
        ) : (
          data.map((row) => (
            <ListingRow
              name={row.name}
              type={row.type}
              price={row.price}
              sex={row.sex}
            />
          ))
        )}
      </div>
      <div className="w-full h-32 p-4 flex-grow-0">
        <div
          className="relative w-full h-full max-h-16"
          onClick={() => setIsListOpened(!isListOpened)}
          role="presentation"
        >
          <div className="absolute z-20 bg-backgroundSecond border-2 border-secondary w-full h-full  flex items-center justify-center hover:cursor-pointer">
            <img
              src={isListOpened ? chevronTop : chevronBottom}
              alt="chevron"
            />
          </div>
          <div className="absolute z-10 bg-ternary w-full h-full top-0.5 left-0.5" />
        </div>
      </div>
    </div>
  );
}
