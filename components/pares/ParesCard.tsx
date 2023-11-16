import { Button } from "../ui/button";

interface Props {
  countryName: string;
  title: string;
  cardType?: "primary" | "secondary";
}

export const VenezuelaCard = () => (
  <div className="bg-white space-y-4 border border-border rounded p-5">
    <p className="text-sm font-semibold text-left">Venezuela</p>
    <h2 className=" text-t-28 font-bold text-left">Bolívar Digital</h2>
    <ul className="flex  items-center gap-10">
      <li className=" text-sm font-normal  relative after:absolute after:w-[9px] after:h-[9px] after:rounded-full after:bg-green after:left-[115%]  after:top-[5px] inline-flex items-center gap-1">
        Moneda
      </li>
      <li className=" text-sm font-normal  relative after:absolute after:w-[9px] after:h-[9px] after:rounded-full after:bg-green  after:left-[115%]  after:top-[5px]  inline-flex items-center gap-1">
        Buy
      </li>
      <li className=" text-sm font-normal  relative after:absolute after:w-[9px] after:h-[9px] after:rounded-full after:bg-green  after:left-[115%]  after:top-[5px]  inline-flex items-center gap-1">
        Sell
      </li>
    </ul>
    <Button variant={"secondary"} className=" w-full active:bg-opacity-50">
      Desactivar moneda
    </Button>
    <div className="grid  gap-2 grid-cols-2">
      <Button>Des. Buy</Button>
      <Button>Des. Sell</Button>
    </div>
  </div>
);
