import React, { createContext } from "react";

interface CategoryContextType {
  filterCategory: string;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
  searchFilter: string;
  setsearchFilter: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextType | null>(null);

export default CategoryContext;
