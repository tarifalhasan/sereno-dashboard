"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
interface CustomPaginateProps extends ReactPaginateProps {
  handlePageClick: (selectedItem: { selected: number }) => void;
  pageCount: number;
  handlePerPageHandler: (value: string) => void;
  itemsPerPage: number;
}
const Pagination: FC<CustomPaginateProps> = ({
  handlePageClick,
  pageCount,
  handlePerPageHandler,
  itemsPerPage,
}) => {
  return (
    <div className="flex  flex-col gap-5  sm:flex-row  items-center justify-between">
      <Select
        onValueChange={handlePerPageHandler}
        defaultValue={itemsPerPage.toString()}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Mostrar 10 Resultados" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="5">Mostrar 05 Resultados</SelectItem>
          <SelectItem value="7">Mostrar 07 Resultados</SelectItem>
          <SelectItem value="8">Mostrar 08 Resultados</SelectItem>
        </SelectContent>
      </Select>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <ChevronRight className=" w-[25px] h-[25px] text-[#838995]" />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <ChevronLeft className=" w-[25px] h-[25px] text-[#838995]" />
        }
        renderOnZeroPageCount={null}
        className="flex items-center gap-5"
        activeClassName="bg-[#3056D3] rounded w-[25px] h-[25px] text-white text-center cursor-pointer"
      />
      <p className=" text-silver_text-foreground text-sm font-medium">
        1,594 Transacciones
      </p>
    </div>
  );
};

export default Pagination;
