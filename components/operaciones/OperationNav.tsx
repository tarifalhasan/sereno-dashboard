"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiDeleteBin4Line } from "react-icons/ri";
import SearchBar from "../ui/search-bar";
interface props {
  title: string;
}
const OperationNav: FC<props> = ({ title }) => {
  const router = useRouter();
  // Define searchTerm state and handleSearchChange function
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="flex flex-wrap 2xl:flex-nowrap gap-4 items-center justify-between">
      <div className=" inline-flex items-center   gap-3">
        <FaArrowLeftLong
          onClick={() => router.back()}
          className="text-slate-550 w-8 cursor-pointer h-8"
        />
        <div>
          <p className="text-sm font-medium text-blue-550">Operaciones</p>
          <h2 className="heading1"> {title}</h2>
        </div>
      </div>
      <div className="flex w-full lg:w-auto items-center gap-4">
        {/* filters dropdown menu */}
        <div className=" hidden sm:flex  items-center gap-4">
          <button>
            <RiDeleteBin4Line className="w-8 h-8 text-silver_text-foreground" />
          </button>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Buy" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="light">Buy</SelectItem>
              <SelectItem value="dark">Sell</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Banco" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="Banco">Banco</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Moneda" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="Moneda">Moneda</SelectItem>
              <SelectItem value="dMonedaark">sds</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Desde" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="Desde">Desde</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="Hasta">
              <SelectValue placeholder="Hasta" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="Hasta">Desde</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Search bar */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default OperationNav;
