import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiDeleteBin4Line } from "react-icons/ri";
import SearchBar from "../ui/search-bar";

const OperationNav = () => {
  return (
    <div className="flex flex-wrap 2xl:flex-nowrap flex-shrink-0 gap-4 items-center justify-between">
      <div className=" inline-flex items-center   gap-3">
        <FaArrowLeftLong className="text-slate-550 w-8 cursor-pointer h-8" />
        <div>
          <p className="text-sm font-medium text-blue-550">Operaciones</p>
          <h2 className="heading1">En proceso</h2>
        </div>
      </div>
      <div className="flex flex-wrap  lg:flex-nowrap flex-shrink-0 items-center gap-4">
        {/* filters dropdown menu */}
        <div className="flex flex-wrap lg:flex-nowrap flex-shrink-0 items-center gap-4">
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
        <SearchBar />
      </div>
    </div>
  );
};

export default OperationNav;
