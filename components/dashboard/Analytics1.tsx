import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const Analytics1 = () => {
  const DATA = [
    {
      objeto: "objeto",
      e1: "2.5K",
      e2: "2.5K",
      progress: "80%",
    },

    {
      objeto: "objeto",
      e1: "376",
      e2: "139",
      progress: "60%",
    },
    {
      objeto: "objeto",
      e1: "468",
      e2: "290",
      progress: "40%",
    },
    {
      objeto: "objeto",
      e1: "298",
      e2: "176",
      progress: "30%",
    },
  ];

  return (
    <div className="border border-border  shadow-card-sm p-7">
      <div className="flex items-center justify-between">
        <h2 className="heading1">Analíticas N1</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className=" outline-none focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"
                  fill="#64748B"
                />
                <path
                  d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                  fill="#64748B"
                />
                <path
                  d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"
                  fill="#64748B"
                />
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>New Team</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table className="table-auto min-w-max  w-full border-separate border-spacing-y-[1em]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-silver_text-foreground font-medium">
              Tópico
            </TableHead>
            <TableHead className=" w-[120px] text-silver_text-foreground text-right font-medium">
              E1
            </TableHead>
            <TableHead className="text-right text-silver_text-foreground w-[60px] font-medium">
              E2
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:last-child]:border-0 ">
          {DATA.map((data, index) => (
            <TableRow
              style={{
                backgroundImage: `linear-gradient(to right,lightgrey ${data.progress},white ${data.progress})`,
              }}
              className={cn(" hover:bg-slate-200")}
              key={index}
            >
              <TableCell className="">{data.objeto} </TableCell>
              <TableCell className=" w-[120px] text-right">{data.e1}</TableCell>
              <TableCell className="text-right w-[120px">{data.e2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Analytics1;
