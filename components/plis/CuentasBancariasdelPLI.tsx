"use client";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useState } from "react";
import AddNewAccountModal from "./AddNewAccount";
const THEAD = ["Nombre", "Buy", "Sell", ""];
interface ICuentas_Bancarias_del_PLI {
  bank: string;
  titular: string;
  nro: string;
  currency: string;
  third: string;
  buy_TAX: string;
  sell_TAX: string;
  switchStates: boolean;
}

const Cuentas_THED = [
  "Banco",
  "Titular",
  "Nro",
  "Moneda",
  "Tercero",
  "Tx Buy",
  "Tx Sell",
  "",
];
const CuentasBancariasdelPLI = () => {
  // Cuentas Bancarias del PLI dummy data

  const Cuentas_Bancarias_del_PLI: ICuentas_Bancarias_del_PLI[] = [
    {
      bank: "Banesco",
      titular: "Ana Ocando",
      nro: "010341915456798759561",
      currency: "BsD",
      third: "Sí",
      buy_TAX: "6%",
      sell_TAX: "6%",
      switchStates: true,
    },
    {
      bank: "Sebastián Rojas",
      titular: "Ana Ocando",
      nro: "010341915456798759561",
      currency: "BsD",
      third: "Sí",
      buy_TAX: "6%",
      sell_TAX: "6%",
      switchStates: true,
    },
    {
      bank: "Sebastián Rojas",
      titular: "Ana Ocando",
      nro: "010341915456798759561",
      currency: "BsD",
      third: "Sí",
      buy_TAX: "6%",
      sell_TAX: "6%",
      switchStates: false,
    },
  ];
  const [Cuentas_Bancarias_del_PLIData, setCuentas_Bancarias_del_PLIData] =
    useState<ICuentas_Bancarias_del_PLI[]>(Cuentas_Bancarias_del_PLI);

  const cuentasHandleSwitch = (index: number, switchStates: boolean) => {
    const updatedData = [...Cuentas_Bancarias_del_PLIData];
    updatedData[index].switchStates = !updatedData[index].switchStates;
    setCuentas_Bancarias_del_PLIData(updatedData);
  };
  return (
    <div>
      <div className="w-full py-5 lg:py-10 overflow-scroll xl:overflow-auto">
        <h2 className="text-base font-semibold pl-5">
          Cuentas Bancarias del PLI
        </h2>
        <table className="table-auto min-w-max text-left w-full">
          <thead>
            <tr>
              {Cuentas_THED.map((item, index, array) => {
                return (
                  <th key={index} className={cn(index === 0 ? "pl-5" : "pl-0")}>
                    <p className="text-t-15  pb-2 font-medium"> {item}</p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className=" ">
            {Cuentas_Bancarias_del_PLIData.map((rowData, index) => (
              <tr className="h-12 border border-border" key={index}>
                <td className="pl-5">
                  <p className={cn("text-t-15 font-normal")}>{rowData.bank}</p>
                </td>
                <td>
                  <p className={cn("text-t-15 font-normal")}>
                    {rowData.titular}
                  </p>
                </td>
                <td>
                  <p className={cn("text-t-15 font-normal")}>{rowData.nro}</p>
                </td>
                <td>
                  <p className={cn("text-t-15 font-normal")}>
                    {rowData.currency}
                  </p>
                </td>
                <td>
                  <p className={cn("text-t-15 font-normal")}>{rowData.third}</p>
                </td>
                <td>
                  <p className={cn("text-t-15 font-normal")}>
                    {rowData.buy_TAX}
                  </p>
                </td>
                <td>
                  <p className={cn("text-t-15 font-normal")}>
                    {rowData.sell_TAX}
                  </p>
                </td>
                <td>
                  <div className="flex items-center justify-end gap-3">
                    <Switch
                      checked={rowData.switchStates}
                      onCheckedChange={() =>
                        cuentasHandleSwitch(index, rowData.switchStates)
                      }
                    />
                    <AddNewAccountModal />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CuentasBancariasdelPLI;
