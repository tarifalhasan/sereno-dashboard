import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";

const VOTCshAssociatedWithThisPLI = () => {
  const DATA = [
    {
      name: "Emmerson Oceanía",
      email: "@emmerson003",
      avatar: "/assets/images/avatar.png",
    },
    {
      name: "Emmerson Oceanía",
      email: "@emmerson003",
      avatar: "/assets/images/avatar.png",
    },
    {
      name: "Emmerson Oceanía",
      email: "@emmerson003",
      avatar: "/assets/images/avatar.png",
    },
    {
      name: "Emmerson Oceanía",
      email: "@emmerson003",
      avatar: "/assets/images/avatar.png",
    },
  ];
  return (
    <div>
      <h2 className="text-base font-medium py-3 pl-5">
        VOTC’sh asociados a este PLI
      </h2>

      <div className=" w-full ">
        <Table>
          <TableBody className="[&_tr:last-child]:border-0">
            {DATA.map((data, index) => (
              <TableRow key={index} className=" w-12 border-y">
                <TableCell className=" w-[285px]">
                  <div className=" inline-flex items-center gap-2">
                    <Image
                      src={data.avatar}
                      alt={data.name}
                      width={24}
                      height={24}
                      className="rounded"
                    />
                    <p className="text-t-15 font-normal">Emmerson Oceanía</p>
                  </div>
                </TableCell>
                <TableCell>{data.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VOTCshAssociatedWithThisPLI;
