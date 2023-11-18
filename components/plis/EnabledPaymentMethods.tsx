"use client";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useState } from "react";
import AddNewAccountModal from "./AddNewAccount";
const THEAD = ["Nombre", "Buy", "Sell", ""];

interface IRowData {
  companyName: string;
  switchStates: {
    buy: boolean;
    sell: boolean;
    addMethod: boolean;
  };
}

const EnabledPaymentMethods = () => {
  const initialTableData: IRowData[] = [
    {
      companyName: "Banesco",
      switchStates: {
        buy: true,
        sell: true,
        addMethod: false,
      },
    },
    {
      companyName: "Mercantil",
      switchStates: {
        buy: true,
        sell: true,
        addMethod: false,
      },
    },
    {
      companyName: "BBVA",
      switchStates: {
        buy: false,
        sell: false,
        addMethod: false,
      },
    },
  ];
  const [tableData, setTableData] = useState<IRowData[]>(initialTableData);

  const handleSwitchChange = (index: number, type: string) => {
    const updatedTableData = [...tableData];
    const currentRow = { ...updatedTableData[index] }; // Create a new object

    if (type === "buy") {
      currentRow.switchStates.buy = !currentRow.switchStates.buy;
    } else if (type === "sell") {
      currentRow.switchStates.sell = !currentRow.switchStates.sell;
    } else if (type === "addMethod") {
      currentRow.switchStates.addMethod = !currentRow.switchStates.addMethod;
    }

    updatedTableData[index] = currentRow;
    setTableData(updatedTableData);
  };
  return (
    <div className="w-full py-5 lg:py-10 overflow-scroll xl:overflow-auto">
      <h2 className="text-base font-semibold pl-5">
        Métodos de pago habilitados
      </h2>
      <table className="table-auto min-w-max text-left w-full">
        <thead>
          <tr>
            {THEAD.map((item, index) => {
              return (
                <th key={index} className={cn(index === 0 ? "pl-5" : "pl-0")}>
                  <p className="text-t-15  pb-2 font-medium"> {item}</p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className=" ">
          {tableData.map((rowData, index) => (
            <tr className="h-12 border-y border-border" key={index}>
              <td className="pl-5">
                <p
                  className={cn(
                    "text-t-15 font-normal",
                    !rowData.switchStates.buy &&
                      !rowData.switchStates.sell &&
                      "opacity-20 cursor-not-allowed"
                  )}
                >
                  {rowData.companyName}
                </p>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={rowData.switchStates.buy}
                    onCheckedChange={() => handleSwitchChange(index, "buy")}
                    disabled={
                      !rowData.switchStates.buy && !rowData.switchStates.sell
                    }
                  />
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={rowData.switchStates.sell}
                    onCheckedChange={() => handleSwitchChange(index, "sell")}
                    disabled={
                      !rowData.switchStates.buy && !rowData.switchStates.sell
                    }
                  />
                </div>
              </td>
              <td className="pr-4">
                <div className="flex items-center justify-end gap-3">
                  <Switch
                    checked={rowData.switchStates.addMethod}
                    onCheckedChange={() =>
                      handleSwitchChange(index, "addMethod")
                    }
                    disabled={
                      !rowData.switchStates.buy && !rowData.switchStates.sell
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
  );
};

export default EnabledPaymentMethods;
