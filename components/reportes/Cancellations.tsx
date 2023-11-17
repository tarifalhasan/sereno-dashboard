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
import Pagination from "../ui/pagination";
import SearchBar from "../ui/search-bar";
const Cancellations = () => {
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
        <SearchBar />
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
          <TableRow className="h-12">
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className=" rounded-sm">
                  <AvatarImage src="/assets/images/avatar.png" />
                </Avatar>
                <p className="text-xs sm:text-t-15 font-normal">
                  Emmerson Oceanía
                </p>
              </div>
            </TableCell>
            <TableCell className="text-xs sm:text-t-15 font-normal">
              Emmerson Oceanía
            </TableCell>
            <TableCell className="text-xs sm:text-t-15 font-normal">
              1234
            </TableCell>
          </TableRow>
          <TableRow className="h-12">
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className=" rounded-sm">
                  <AvatarImage src="/assets/images/avatar.png" />
                </Avatar>
                <p className=" text-xs sm:text-t-15 font-normal">
                  Emmerson Oceanía
                </p>
              </div>
            </TableCell>
            <TableCell className="text-xs sm:text-t-15 font-normal">
              Emmerson Oceanía
            </TableCell>
            <TableCell className="text-xs sm:text-t-15 font-normal">
              1234
            </TableCell>
          </TableRow>
          <TableRow className="h-12">
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className=" rounded-sm">
                  <AvatarImage src="/assets/images/avatar.png" />
                </Avatar>
                <p className="text-xs sm:text-t-15 font-normal">
                  Emmerson Oceanía
                </p>
              </div>
            </TableCell>
            <TableCell className="text-xs sm:text-t-15 font-normal">
              Emmerson Oceanía
            </TableCell>
            <TableCell className="text-xs sm:text-t-15 font-normal">
              1234
            </TableCell>
          </TableRow>
          <TableRow className="h-12">
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className=" rounded-sm">
                  <AvatarImage src="/assets/images/avatar.png" />
                </Avatar>
                <p className="text-xs sm:text-t-15 font-normal">
                  Emmerson Oceanía
                </p>
              </div>
            </TableCell>
            <TableCell className="text-xs sm:text-t-15 font-normal">
              Emmerson Oceanía
            </TableCell>
            <TableCell className="text-xs sm:text-t-15 font-normal">
              1234
            </TableCell>
          </TableRow>
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
