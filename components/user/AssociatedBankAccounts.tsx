import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ITransaction } from "@/types";
import { FC } from "react";
import { Button } from "../ui/button";

const THED = ["Banco", "Titular", "Nro", "Moneda", "Tercero", ""];

interface LatestTransactionsProps {
  data: ITransaction[];
}

const AssociatedBankAccounts: FC<LatestTransactionsProps> = ({ data }) => {
  return (
    <div className="space-y-5">
      <div className="flex px-5  pt-5 xl:pt-8 items-center justify-between">
        <h4 className="text-base font-semibold">Cuentas Bancarias Asociadas</h4>
        <p className="text-sm font-normal text-light-blue">Ver todas</p>
      </div>
      <Table className=" min-w-max w-full table-auto">
        <TableHeader>
          <TableRow>
            {THED.map((item, i) => (
              <TableCell
                className={cn(i === 0 && "pl-5", " font-semibold")}
                key={item}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <>
            {data.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.Banco}</TableCell>
                <TableCell>{data.titular}</TableCell>
                <TableCell>{data.Nro}</TableCell>
                <TableCell>{data.Moneda}</TableCell>
                <TableCell>{data.tercero}</TableCell>
                <TableCell className="text-right">
                  <Button className=" h-8  px-[30px]" variant={"success"}>
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </>
        </TableBody>
      </Table>
    </div>
  );
};

export default AssociatedBankAccounts;
