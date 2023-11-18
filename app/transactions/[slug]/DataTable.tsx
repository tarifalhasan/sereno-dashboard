"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuEye } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useState } from "react";

const THEAD = ["Banco", "Titular", "Nro", "Moneda", "Tercero", "Documento", ""];
interface ITransactionsData {
  banco: string;
  titular: string;
  nro: string;
  moneda: string;
  tereco: string;
  documento: string;
}
const DataTable = () => {
  const [editableRowIndex, setEditableRowIndex] = useState<number>(-1);

  const [transactionsData, setTransactionsData] = useState<ITransactionsData[]>(
    [
      {
        banco: "Banesco",
        titular: "Ana Ocando",
        nro: "010341915456798759561",
        moneda: "BsD",
        tereco: "Sí",
        documento: "v25666444",
      },

      {
        banco: "Banesco",
        titular: "Ana Ocando",
        nro: "010341915456798759561",
        moneda: "BsD",
        tereco: "Sí",
        documento: "v25666444",
      },
      {
        banco: "Banesco",
        titular: "Ana Ocando",
        nro: "010341915456798759561",
        moneda: "BsD",
        tereco: "Sí",
        documento: "v25666444",
      },
      {
        banco: "Banesco",
        titular: "Ana Ocando",
        nro: "010341915456798759561",
        moneda: "BsD",
        tereco: "Sí",
        documento: "v25666444",
      },
    ]
  );

  const [editedData, setEditedData] = useState<ITransactionsData[]>([]);

  const handleEditRow = (rowIndex: number) => {
    setEditableRowIndex(rowIndex === editableRowIndex ? -1 : rowIndex);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ITransactionsData
  ) => {
    const { value } = e.target;
    const updatedData = [...transactionsData];
    updatedData[editableRowIndex][field] = value;
    setTransactionsData(updatedData);
  };

  const handleSelectChange = (
    value: string,
    field: keyof ITransactionsData
  ) => {
    const updatedData = [...transactionsData];
    updatedData[editableRowIndex][field] = value;
    setTransactionsData(updatedData);
  };
  return (
    <div>
      <Table className="table-auto text-left min-w-max">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-dark w-[100px]">
              Banco
            </TableHead>
            <TableHead className="font-semibold text-dark">Titular</TableHead>
            <TableHead className="font-semibold text-dark">Nro</TableHead>
            <TableHead className="font-semibold text-dark">Moneda</TableHead>
            <TableHead className="font-semibold text-dark">Tercero</TableHead>
            <TableHead className="font-semibold text-dark">Documento</TableHead>
            <TableHead className="font-semibold text-dark"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:last-child]:border">
          {transactionsData.map((item, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell className=" w-[80px]">
                {editableRowIndex === rowIndex ? (
                  <Select
                    defaultValue={item.banco}
                    onValueChange={(value) =>
                      handleSelectChange(value, "banco")
                    }
                  >
                    <SelectTrigger className="">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="text-t-15 w-full text-dark font-normal">
                    {item.banco}
                  </p>
                )}
              </TableCell>
              <TableCell className=" w-[140px]">
                {editableRowIndex === rowIndex ? (
                  <Input
                    value={item.titular}
                    onChange={(e) => handleInputChange(e, "titular")}
                  />
                ) : (
                  <p className="text-t-15 w-full text-dark font-normal">
                    {item.titular}
                  </p>
                )}
              </TableCell>
              <TableCell className=" w-[240px]">
                {editableRowIndex === rowIndex ? (
                  <Input
                    value={item.nro}
                    onChange={(e) => handleInputChange(e, "nro")}
                  />
                ) : (
                  <p className="text-t-15 w-full text-dark font-normal">
                    {item.nro}
                  </p>
                )}
              </TableCell>
              <TableCell className=" w-[120px]">
                {editableRowIndex === rowIndex ? (
                  <Input
                    value={item.moneda}
                    onChange={(e) => handleInputChange(e, "moneda")}
                  />
                ) : (
                  <p className="text-t-15 w-full text-dark font-normal">
                    {item.moneda}
                  </p>
                )}
              </TableCell>
              <TableCell className=" w-[150px]">
                {editableRowIndex === rowIndex ? (
                  <Input
                    value={item.tereco}
                    onChange={(e) => handleInputChange(e, "tereco")}
                  />
                ) : (
                  <p className="text-t-15 w-full text-dark font-normal">
                    {item.tereco}
                  </p>
                )}
              </TableCell>
              <TableCell className=" w-[240px]">
                {editableRowIndex === rowIndex ? (
                  <Input
                    value={item.documento}
                    onChange={(e) => handleInputChange(e, "documento")}
                  />
                ) : (
                  <p className="text-t-15 w-full text-dark font-normal">
                    {item.documento}
                  </p>
                )}
              </TableCell>

              <TableCell className="text-right">
                <div className="inline-flex items-center gap-2">
                  <Button variant={"secondary"}>
                    <LuEye className="text-2xl text-white" />
                  </Button>
                  <Button
                    onClick={() => handleEditRow(rowIndex)}
                    className="px-[30px]"
                    variant={"success"}
                  >
                    {editableRowIndex === rowIndex ? "Guardar" : "Editar"}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
