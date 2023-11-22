"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "../ui/button";

const THED = ["Tipo", "Usuario", "Fecha", "Banco", "Monto", "Moneda", ""];

interface ILatestTransaction {
  id: number;
  username: string;
  TxID: string;
  Fecha: string;
  Monto: string;
  Moneda: string;
  Tiempo: string;
  Banco: string;
  transactions_id: string;
}
interface LatestTransactionsProps {
  data: ILatestTransaction[];
}
const LatestTransactions: FC<LatestTransactionsProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="space-y-5">
      <div className="flex px-5  pt-5 xl:pt-8 items-center justify-between">
        <h4 className="text-base font-semibold">Últimas transacciones</h4>
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
                <TableCell>
                  <p className=" inline-flex text-[0.9375rem] font-normal items-center">
                    <span className="  font-extrabold  block  text-green rounded-full">
                      +
                    </span>
                    <span className=" block font-normal">Buy</span>
                  </p>
                </TableCell>
                <TableCell>{data.username}</TableCell>
                <TableCell>{data.Fecha}</TableCell>
                <TableCell>{data.Banco}</TableCell>
                <TableCell>{data.Monto}</TableCell>
                <TableCell>{data.Moneda}</TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() =>
                      router.push(
                        `/users/search/3f725c72-87af-11ee-b528-eb185feaf229/transactions/${data.transactions_id.toLowerCase()}`
                      )
                    }
                    className=" h-8  px-[30px]"
                    variant={"secondary"}
                  >
                    Ver Tx
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

export default LatestTransactions;
