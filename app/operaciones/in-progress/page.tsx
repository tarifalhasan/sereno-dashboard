"use client";
import OperationNav from "@/components/operaciones/OperationNav";
import Pagination from "@/components/ui/pagination";
import Image from "next/image";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
const InProgress = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setitemsPerPage] = useState(9);
  const items = [
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
    {
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Método: "Banesco",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
    },
  ];

  console.log(itemsPerPage);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // Invok when user click per page

  const handleSelectChange = (value: string) => {
    const selectedOptionValue = value; // Get the selected option value
    setitemsPerPage(parseInt(selectedOptionValue)); // Update the state with the selected value
  };

  const THEAD = [
    "Tipo",
    "Username",
    "TxID",
    "Fecha",
    "Método",
    "Monto",
    "Moneda",
    "Tiempo",
    "",
  ];

  return (
    <div className=" space-y-7 w-full">
      <OperationNav />
      <div className=" pt-5 h-full w-full overflow-scroll 2xl:overflow-auto">
        <table className="w-full min-w-max table-auto  data-table text-center">
          <thead>
            <tr>
              {THEAD.map((t, index) => (
                <th key={index}>
                  <p className="text-[0.9375rem] font-semibold text-black'">
                    {t}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <>
              {currentItems.map((d, index) => (
                <tr key={index}>
                  <td className="border h-12 rounded-l-md border-border border-r-0">
                    <p className=" inline-flex text-[0.9375rem] font-normal items-center">
                      <span className="  font-extrabold  block  text-green rounded-full">
                        +
                      </span>
                      <span className=" block font-normal">Buy</span>
                    </p>
                  </td>
                  <td className=" border-y h-12 border-border">
                    <p className="text-[0.9375rem] font-normal text-black'">
                      {d.username}
                    </p>
                  </td>
                  <td className=" border-y h-12 border-border">
                    <p className="text-[0.9375rem] font-normal text-black'">
                      {d.TxID}
                    </p>
                  </td>
                  <td className=" border-y h-12 border-border">
                    <p className="text-[0.9375rem] font-normal text-black'">
                      {d.Fecha}
                    </p>
                  </td>
                  <td className=" border-y h-12 border-border">
                    <p className="text-[0.9375rem] font-normal text-black'">
                      {d.Método}
                    </p>
                  </td>
                  <td className=" border-y h-12 border-border">
                    <p className="text-[0.9375rem] font-normal text-black'">
                      {d.Monto}
                    </p>
                  </td>
                  <td className=" border-y h-12 border-border">
                    <p className="text-[0.9375rem] font-normal text-black'">
                      {d.Moneda}
                    </p>
                  </td>
                  <td className=" border-y h-12 border-border">
                    <p className="text-[0.9375rem] font-normal text-black'">
                      {d.Tiempo}
                    </p>
                  </td>
                  <td className="border h-12 rounded-r-md border-border border-l-0">
                    <div className=" inline-flex items-center gap-2">
                      <button className=" rounded bg-silver_text-foreground inline-flex items-center justify-center h-[32px] w-[50px]">
                        <LuEye size={25} className="text-white" />
                      </button>
                      <button className=" rounded bg-red-foreground inline-flex items-center justify-center h-[32px] w-[50px]">
                        <Image
                          src={"/assets/images/delete.svg"}
                          alt="delete"
                          width={20}
                          height={14.444}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
      <Pagination
        handlePerPageHandler={handleSelectChange}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default InProgress;
