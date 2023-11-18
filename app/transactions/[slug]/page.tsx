"use client";
import TopNavigation from "@/components/TopNavigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RiDeleteBin4Line } from "react-icons/ri";

import UserProfileDetails from "@/components/user/UserDetails";
import { IuserData } from "@/types";
import DataTable from "./DataTable";

const TransactionsHistory = () => {
  const userData: IuserData = {
    name: "Sebastián Rojas",
    status: "Activo",
    country: "PE",
    balance: "9,497USD",
    email: "sebastians@gmail.com",
    phone: "+8801779158124",
    tier: "Tier 1",
    txCompletadas: "79",
    txCanceladas: "528",
    feeMantenimiento: "35,564USD",
    feeVol: "35,564USD",
    address: "Dirección 5, Edif. 9, Puerto Ordaz.",
    docId: "v10444333",
  };

  return (
    <div className="space-y-5">
      <TopNavigation title="Búsqueda de perfiles" des="Usuario" />
      <div className="border rounded border-border space-y-5 py-5">
        <div className="px-5">
          <UserProfileDetails userData={userData} />
        </div>
        <div className="flex px-5 gap-5 flex-col lg:flex-row lg:items-center justify-between">
          <div className=" inline-flex items-center gap-4">
            <h4 className="text-base font-semibold">
              Cuentas Bancarias Asociadas
            </h4>
            <button>
              <RiDeleteBin4Line className="text-3xl text-silver_text-foreground" />
            </button>
            <Select>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Aprobadas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-light-blue font-normal">Ver todas</p>
        </div>
        {/* data table */}
        <DataTable />
      </div>
    </div>
  );
};

export default TransactionsHistory;
