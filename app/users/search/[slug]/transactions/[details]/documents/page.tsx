"use client";

import TopNavigation from "@/components/TopNavigation";
import UploadAssets from "@/components/modals/UploadAssets";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserProfileDetails from "@/components/user/UserDetails";
import { userData } from "@/constants";
import { useState } from "react";

const Documentos = () => {
  const [approve, setApprove] = useState<boolean>(false);

  const handleApprove = () => {
    setApprove(true);
  };
  return (
    <div className="space-y-5 xl:space-y-7">
      <TopNavigation title="Búsqueda de perfiles" des="Documentos" />
      <div className="border border-border py-5">
        <div className="px-5">
          <UserProfileDetails userData={userData} />
        </div>
        <Table className="table-auto min-w-max">
          <TableHeader>
            <TableRow className=" border-x-0">
              <TableHead className="font-semibold text-dark">Banco</TableHead>
              <TableHead className="font-semibold text-dark">Titular</TableHead>
              <TableHead className="font-semibold text-dark">Nro</TableHead>
              <TableHead className="font-semibold text-dark">Moneda</TableHead>
              <TableHead className="font-semibold text-dark">
                Documento
              </TableHead>
              <TableHead className="font-semibold text-dark">Tercero</TableHead>
              <TableHead className="font-semibold text-right text-dark"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border  ">
            <TableRow className="!border-x-0">
              <TableCell className="">Banesco</TableCell>
              <TableCell>Ana Ocando</TableCell>
              <TableCell>010341915456798759561</TableCell>
              <TableCell>BsD</TableCell>
              <TableCell>V24333555</TableCell>
              <TableCell>Sí</TableCell>
              <TableCell className="text-right">
                <Button variant={"success"}>Editar</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* Documentos Cuenta de tercero */}

        <div className=" py-5">
          <h4 className="text-base  pt-6 pb-4 pl-4 font-semibold text-dark">
            Documentos Cuenta de tercero
          </h4>
          <Table className="table-auto min-w-max">
            <TableHeader>
              <TableRow className=" border-x-0">
                <TableHead className="font-semibold text-dark">Tipo</TableHead>
                <TableHead className="font-semibold text-dark">
                  Archivo
                </TableHead>
                <TableHead className="font-semibold text-right text-dark"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="[&_tr:last-child]:border  ">
              <TableRow className="!border-x-0">
                <TableCell className="">Cédula de identidad</TableCell>
                <TableCell className="">foto_camara_1231245.png</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end items-center gap-2">
                    <Button
                      className=" w-[85px]  h-[32px]"
                      variant={"secondary"}
                    >
                      Ver
                    </Button>
                    <Button
                      className=" w-[85px]  h-[32px]"
                      variant={"secondary"}
                    >
                      Borrar
                    </Button>
                    <Button
                      className=" w-[85px]  h-[32px]"
                      variant={"secondary"}
                    >
                      Subir
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:max-w-[180px]">
        <Button onClick={() => handleApprove()} variant={"success"}>
          Aprobar
        </Button>
        <Button variant={"secondary"}>Rechazar</Button>
      </div>
      {approve && <UploadAssets isOpen={approve} setIsOpen={setApprove} />}
    </div>
  );
};

export default Documentos;
