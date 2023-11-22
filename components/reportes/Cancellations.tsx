"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "../ui/pagination";
import SearchBar from "../ui/search-bar";
interface TableData {
  id: number;
  name: string;
  user: string;
  volume: number;
  avatar: string;
}
const dummyTableData: TableData[] = [
  {
    id: 1,
    name: "Product A",
    user: "John Doe",
    volume: 1234,
    avatar: "/assets/images/avatar.png",
  },
  {
    id: 2,
    name: "Product B",
    user: "Jane Smith",
    volume: 5678,
    avatar: "/assets/images/avatar.png",
  },
  {
    id: 3,
    name: "Product C",
    user: "Alex Johnson",
    volume: 9876,
    avatar: "/assets/images/avatar.png",
  },
];

const Cancellations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<TableData[]>([]);

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  // Filtering logic based on the search term
  useEffect(() => {
    const filtered = dummyTableData.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  const highlightSearchTerm = (text: string): JSX.Element => {
    if (searchTerm.trim() === "") {
      return <>{text}</>; // Return the original text if search term is empty
    }

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <mark key={index} className="bg-yellow-200">
              {part}
            </mark>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };
  const handlePageClick = (event: any) => {
    // do something
  };
  return (
    <div className="space-y-5">
      <div className="grid xl:grid-cols-2 gap-5">
        <div className="flex items-center justify-between flex-1">
          <h4 className="text-sm font-semibold">Cancelaciones</h4>
          <Select defaultValue="30">
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder="select days" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="30">30d</SelectItem>
              <SelectItem value="15">15d</SelectItem>
              <SelectItem value="7">07d</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
      </div>
      <Table className=" min-w-max w-full">
        <TableHeader>
          <TableRow className=" h-12">
            <TableHead className="font-semibold text-dark w-[235px]">
              Nombre
            </TableHead>
            <TableHead className="font-semibold text-dark w-[225px]">
              Usuario
            </TableHead>
            <TableHead>
              <div className=" inline-flex items-center gap-2">
                <p className="font-semibold text-dark">Volumen ingresado</p>
                <Image
                  width={30}
                  height={17}
                  alt="filter"
                  src={"/assets/icons/filter.svg"}
                />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:last-child]:border [&_tr]:border">
          {filteredData.map((item, index) => (
            <TableRow key={index} className="h-12">
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className=" rounded-sm">
                    <AvatarImage src={item.avatar} />
                  </Avatar>
                  <p className="text-xs sm:text-t-15 font-normal">
                    {highlightSearchTerm(item.name)}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-xs sm:text-t-15 font-normal">
                {highlightSearchTerm(item.user)}
              </TableCell>
              <TableCell className="text-xs sm:text-t-15 font-normal">
                {item.volume}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        handlePageClick={handlePageClick}
        pageCount={5}
        itemsPerPage={5}
        pageCountDisplayed={false}
        totalPageDisplayed={false}
      />
    </div>
  );
};

export default Cancellations;
