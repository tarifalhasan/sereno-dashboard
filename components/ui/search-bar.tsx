"use client";

import { Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onSearchChange(event.target.value);
  };
  return (
    <div className="flex items-center w-full   px-3 h-[38px]   lg:min-w-[307px] justify-between bg-gray-25 border-border rounded-[6px]">
      <input
        type="text"
        className="flex-1 bg-transparent text-sm font-medium text-silver_text-foreground outline-none focus:outline-none border-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <Search className="w-5 h-5 text-silver_text-foreground" />
    </div>
  );
};

export default SearchBar;
