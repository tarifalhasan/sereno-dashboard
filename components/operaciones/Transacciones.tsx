import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
const Transacciones = () => {
  return (
    <div>
      <h2 className="heading1 ">Transacciones</h2>
      <div className="flex flex-wrap pt-6 items-center justify-center gap-5">
        <CARD />
        <CARD />
      </div>
    </div>
  );
};

const CARD = () => (
  <div className="border lg:max-w-[282px] w-full border-border shadow-card-sm  p-5">
    <div className="flex items-center   justify-between">
      <p className="text-sm font-bold">Tx Completadas</p>
      <Select>
        <SelectTrigger className="w-[73px]">
          <SelectValue placeholder="30d" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="light">30d</SelectItem>
          <SelectItem value="dark">15d</SelectItem>
          <SelectItem value="system">07d</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="inline-flex items-center gap-2">
      <h2 className=" text-t-28 font-bold">18.6K</h2>
      <span className="flex items-center gap-1">
        <ArrowUp className={cn("w-5 h-5 text-red")} />
      </span>
    </div>
  </div>
);

export default Transacciones;
