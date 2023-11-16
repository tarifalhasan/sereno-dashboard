import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Statistics = () => {
  const DATA = ["", "", "", "", "", "", "", "", "", ""];
  return (
    <div className="border border-border  shadow-card-sm p-7">
      <div className="flex items-center justify-between">
        <h2 className="heading1">Estadística</h2>
      </div>
      <Table className="min-w-max table-auto">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="border-t border-border">
            <TableHead className="">Nombre</TableHead>
            <TableHead className="text-left">Objeto</TableHead>
            <TableHead className="text-left">Objeto</TableHead>
            <TableHead className="text-left">Objeto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DATA.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <div className=" inline-flex items-center gap-2">
                  <Image
                    alt="avatar"
                    width={50}
                    height={50}
                    src={"/assets/images/avatar.png"}
                  />
                  <h4 className="text-sm text-dark font-medium">
                    Nombre Apellido
                  </h4>
                </div>
              </TableCell>
              <TableCell className="text-left">Tópico</TableCell>
              <TableCell className="text-left">$269</TableCell>
              <TableCell className={cn("text-left text-green")}>$45</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Statistics;
