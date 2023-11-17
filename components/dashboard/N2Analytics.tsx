import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DonutPieDashboard from "../charts/DonutPieDashboard";

const N2Analytics = () => {
  return (
    <div>
      <div className="border border-border  shadow-card-sm p-7 bg-white">
        <div className="flex items-center justify-between">
          <h2 className=" text-t-22 font-bold">Analíticas N2</h2>
          <Select defaultValue="30">
            <SelectTrigger className="w-[75px]">
              <SelectValue placeholder="select days" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="30">30d</SelectItem>
              <SelectItem value="15">15d</SelectItem>
              <SelectItem value="7">07d</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DonutPieDashboard />
      </div>
    </div>
  );
};

export default N2Analytics;
