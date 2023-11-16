import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
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

const DigitalBolivar = () => {
  return (
    <div>
      <h3 className=" pl-5 py-2 text-base font-semibold">Bolívar Digital</h3>
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
            <tr className="h-12 border border-border">
              <td className=" pl-5">
                <p className="text-t-15 font-normal">Banesco</p>
              </td>
              <td>
                <p className="text-t-15 font-normal">35,345</p>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch />
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch />
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
                  <Switch />
                  <AñadirMétodo />
                </div>
              </td>
            </tr>
            <tr className="h-12 border border-border">
              <td className=" pl-5">
                <p className="text-t-15 font-normal">Mercantil</p>
              </td>
              <td>
                <p className="text-t-15 font-normal">35,345</p>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch />
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch />
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
                  <Switch />
                  <AñadirMétodo />
                </div>
              </td>
            </tr>
            <tr className="h-12 border border-border">
              <td className=" pl-5">
                <p className="text-t-15 font-normal">BDV</p>
              </td>
              <td>
                <p className="text-t-15 font-normal">35,345</p>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch />
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch />
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
                  <Switch />
                  <AñadirMétodo />
                </div>
              </td>
            </tr>
            <tr className="h-12 opacity-40 border border-border">
              <td className=" pl-5">
                <p className="text-t-15 font-normal">Pago Movil</p>
              </td>
              <td>
                <p className="text-t-15 font-normal">35,345</p>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch disabled />
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch disabled />
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
                  <Switch disabled />
                  <AñadirMétodo />
                </div>
              </td>
            </tr>
            <tr className="h-12 border border-border">
              <td className=" pl-5">
                <p className="text-t-15 font-normal">Banesco</p>
              </td>
              <td>
                <p className="text-t-15 font-normal">35,345</p>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch />
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <p className="text-t-15 font-normal">3%</p>
                  <Switch />
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
                  <Switch />
                  <AñadirMétodo />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DigitalBolivar;
