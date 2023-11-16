"use client";
import OperationNav from "@/components/operaciones/OperationNav";
import Pagination from "@/components/ui/pagination";
import { OperationsDummyData } from "@/constants";
import { IOperationData } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuEye } from "react-icons/lu";
const InProgress = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [dummyData, setDummyData] = useState<IOperationData[]>([]);
  const [itemsPerPage, setitemsPerPage] = useState(9);
  const router = useRouter();

  useEffect(() => {
    setDummyData(OperationsDummyData);
  }, []);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = dummyData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dummyData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % dummyData.length;
    setItemOffset(newOffset);
  };

  // Invok when user click per page

  const handleSelectChange = (value: string) => {
    setitemsPerPage(parseInt(value));
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
    <div className=" space-y-7  w-full">
      <OperationNav title="Procesadas" />
      <div className=" pt-5 h-full w-full overflow-scroll">
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
                    <button
                      onClick={() =>
                        router.push(`processed/${d.id.toString()}}`)
                      }
                      className=" rounded bg-silver_text-foreground inline-flex items-center justify-center h-[32px] w-[50px]"
                    >
                      <LuEye size={25} className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
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
