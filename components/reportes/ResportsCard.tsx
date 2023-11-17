import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { FaArrowUp } from "react-icons/fa";

const ResportsCard = () => {
  return (
    <div className="border border-border shadow-card-sm p-5 flex w-full items-center">
      <div className="space-y-5 w-full">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm font-semibold">Dinero Ingresado</p>
          <Select defaultValue="30">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="select days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30d</SelectItem>
              <SelectItem value="15">15d</SelectItem>
              <SelectItem value="7">07d</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" flex items-center gap-1">
          <h4 className="text-xl lg:text-t-28 font-bold">$18.6K</h4>
          <p
            className={cn(
              "text-green font-semibold text-sm inline-flex items-center gap-1"
            )}
          >
            <FaArrowUp /> 18%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResportsCard;
