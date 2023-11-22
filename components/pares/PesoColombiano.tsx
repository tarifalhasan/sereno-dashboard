"use client";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import AñadirMétodo from "./AñadirMétodo";

const THEAD = [
  "Nombre",
  "Tasa prom.",
  "Spr. buy",
  "Spr. sell",
  "Spr. general",
  "Fee de vol.",
  "PLI online",
];

const PesoColombiano: FC = () => {
  const TableData = [
    {
      nombre: "Banesco",
      tasa_prom: "35,345",
      spr_buy: {
        total: "3%",
        isActive: true,
        isDisabled: false,
      },
      spr_sell: {
        total: "3%",
        isActive: true,
        isDisabled: false,
      },
      spr_genarel: "3%",
      fee_de_vol: "1%",
      pli_online: 181,
      AñadirMétodo: {
        isActive: true,
        isEdit: false,
        isDisabled: false,
      },
    },
    {
      nombre: "Banesco",
      tasa_prom: "35,345",
      spr_buy: {
        total: "3%",
        isActive: true,
        isDisabled: false,
      },
      spr_sell: {
        total: "3%",
        isActive: true,
        isDisabled: false,
      },
      spr_genarel: "3%",
      fee_de_vol: "1%",
      pli_online: 181,
      AñadirMétodo: {
        isActive: true,
        isEdit: false,
        isDisabled: false,
      },
    },
    {
      nombre: "Banesco",
      tasa_prom: "35,345",
      spr_buy: {
        total: "3%",
        isActive: true,
        isDisabled: false,
      },
      spr_sell: {
        total: "3%",
        isActive: true,
        isDisabled: false,
      },
      spr_genarel: "3%",
      fee_de_vol: "1%",
      pli_online: 181,
      AñadirMétodo: {
        isActive: true,
        isEdit: false,
        isDisabled: false,
      },
    },
    {
      nombre: "Banesco",
      tasa_prom: "35,345",
      spr_buy: {
        total: "3%",
        isActive: true,
        isDisabled: false,
      },
      spr_sell: {
        total: "3%",
        isActive: true,
        isDisabled: false,
      },
      spr_genarel: "3%",
      fee_de_vol: "1%",
      pli_online: 181,
      AñadirMétodo: {
        isActive: true,
        isEdit: false,
        isDisabled: false,
      },
    },
  ];

  const [isActiveSwitchBuy, setIsActiveSwitchBuy] = useState(
    TableData.map((data) => data.spr_buy.isActive)
  );
  const [isActiveSwitchSell, setIsActiveSwitchSell] = useState(
    TableData.map((data) => data.spr_sell.isActive)
  );
  const [isActiveSwitchMethod, setIsActiveSwitchMethod] = useState(
    TableData.map((data) => data.AñadirMétodo.isActive)
  );

  const handleSwitchChangeForBuy = (index: number) => {
    const updatedSwitches = [...isActiveSwitchBuy];
    updatedSwitches[index] = !updatedSwitches[index];
    setIsActiveSwitchBuy(updatedSwitches);
    // Any additional logic for handling the switch change...
  };

  const handleSwitchChangeForSell = (index: number) => {
    const updatedSwitches = [...isActiveSwitchSell];
    updatedSwitches[index] = !updatedSwitches[index];
    setIsActiveSwitchSell(updatedSwitches);
    // Any additional logic for handling the switch change...
  };

  const handleSwitchChangeForMethod = (index: number) => {
    const updatedSwitches = [...isActiveSwitchMethod];
    updatedSwitches[index] = !updatedSwitches[index];
    setIsActiveSwitchMethod(updatedSwitches);
    // Any additional logic for handling the switch change...
  };

  return (
    <div>
      <h3 className=" pl-5 py-2 text-base font-semibold">Peso Colombiano</h3>
      <div className="w-full overflow-scroll xl:overflow-auto">
        <table className="table-auto min-w-max text-left w-full">
          <thead>
            <tr className=" ">
              {THEAD.map((thead, index) => (
                <th key={thead}>
                  <p
                    className={cn(
                      "text-t-15 py-5 font-semibold text-black",
                      index === 0 && "pl-5"
                    )}
                  >
                    {thead}
                  </p>
                </th>
              ))}
              <th>
                <Button className=" h-[32px]" variant={"secondary"}>
                  Añadir Método
                </Button>
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            {TableData.map((data, index) => (
              <tr
                key={index}
                className={cn(
                  "h-12 border border-border",
                  data.spr_buy.isDisabled && "opacity-50"
                )}
              >
                <td className=" pl-5">
                  <p className="text-t-15 font-normal">{data.nombre}</p>
                </td>
                <td>
                  <p className="text-t-15 font-normal">{data.tasa_prom}</p>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <p className="text-t-15 font-normal">
                      {data.spr_buy.total}
                    </p>
                    <Switch
                      onCheckedChange={() => handleSwitchChangeForBuy(index)}
                      checked={isActiveSwitchBuy[index]}
                      disabled={data.spr_buy.isDisabled}
                    />
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <p className="text-t-15 font-normal">3%</p>
                    <Switch
                      onCheckedChange={() => handleSwitchChangeForSell(index)}
                      checked={isActiveSwitchSell[index]}
                      disabled={data.spr_sell.isDisabled}
                    />
                  </div>
                </td>
                <td>
                  <p className="text-t-15 font-normal"> 3%</p>
                </td>
                <td>
                  <p className="text-t-15 font-normal"> 1%</p>
                </td>
                <td>
                  <p className="text-t-15 font-normal">184</p>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <Switch
                      onCheckedChange={() => handleSwitchChangeForMethod(index)}
                      checked={isActiveSwitchMethod[index]}
                      disabled={data.AñadirMétodo.isDisabled}
                    />
                    <AñadirMétodo />
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

export default PesoColombiano;
