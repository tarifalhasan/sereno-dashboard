"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { v1 as uuidv4 } from "uuid";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
const dummy_company = [
  {
    conpany_name: "Bolívar Digital",

    active_user: [
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Mercantil",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
    ],
    user_details: [
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
      {
        name: "Mirabelle Hargraves",
        username: "@mihafff",
        avatar: "/assets/images/image 4 (1).png",
        id: uuidv4(),
      },
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
    ],
  },
  {
    conpany_name: "Bolívar Digital",
    active_user: [
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Mercantil",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
    ],
    user_details: [
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
      {
        name: "Mirabelle Hargraves",
        username: "@mihafff",
        avatar: "/assets/images/image 4 (1).png",
        id: uuidv4(),
      },
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
    ],
  },
  {
    conpany_name: "Bolívar Digital",
    active_user: [
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Mercantil",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
      {
        name: "Banesco",
        active_users: 9465,
        id: uuidv4(),
      },
    ],
    user_details: [
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
      {
        name: "Mirabelle Hargraves",
        username: "@mihafff",
        avatar: "/assets/images/image 4 (1).png",
        id: uuidv4(),
      },
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
      {
        name: "Emmerson Oceanía",
        username: "@emmerson003",
        avatar: "/assets/images/image 4.png",
        id: uuidv4(),
      },
    ],
  },
];

const Plis = () => {
  const router = useRouter();
  const [searchTerms, setSearchTerms] = useState(dummy_company.map(() => ""));

  const overview = [
    {
      country_name: "Venezuela",
      conpany_name: "Bolívar Digital",
      users: "354",
    },
    {
      country_name: "Colombia",
      conpany_name: "Peso Colombiano",
      users: "354",
    },
    {
      country_name: "Chile",
      conpany_name: "Peso Chileno",
      users: "354",
    },
  ];

  return (
    <div className="">
      <h2 className="heading1">PLI’s</h2>
      <div className="grid sm:grid-cols-2 py-5 xl:py-7  lg:grid-cols-3 gap-5">
        {overview.map((data, index) => (
          <div
            className="border space-y-3 border-border shadow-card-sm rounded-[2px] p-5 xl:p-7"
            key={index}
          >
            <p className="text-sm font-semibold">{data.country_name}</p>
            <h3 className="text-xl font-bold underline">{data.conpany_name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-sm font-normal">{data.users} usuarios</p>
              <span className=" w-[9px] h-[9px] bg-green rounded-full block"></span>
            </div>
          </div>
        ))}
      </div>
      <div className=" space-y-5  lg:space-y-10">
        {dummy_company.map((data, index) => (
          <div key={index} className="grid pt-3 grid-cols-12 lg:gap-7 gap-5">
            <div className=" col-span-12 xl:col-span-4">
              <h4 className="text-base font-semibold pl-4">
                {data.conpany_name}
              </h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-t-15 font-medium">
                      Nombre
                    </TableHead>
                    <TableHead className="text-t-15 font-medium">
                      Usu. activos
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="[&_tr:last-child]:border">
                  {data.active_user.map((u, index, array) => (
                    <TableRow
                      key={index}
                      className={cn("h-12 border border-border")}
                    >
                      <TableCell className="font-medium">{u.name}</TableCell>
                      <TableCell>{u.active_users}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className=" col-span-12 xl:col-span-8">
              <Input
                className="border w-full border-border rounded-[6px]  text-sm text-silver_text-foreground"
                type="search"
                placeholder="@username, nombre, correo eletrónico, número telefónico"
                value={searchTerms[index]}
                onChange={(e) => {
                  const newSearchTerms = [...searchTerms];
                  newSearchTerms[index] = e.target.value;
                  setSearchTerms(newSearchTerms);
                }}
              />
              <ul className="space-y-5 pt-5">
                {data.user_details
                  .filter(
                    (user) =>
                      user.name
                        .toLowerCase()
                        .includes(searchTerms[index].toLowerCase()) ||
                      user.username
                        .toLowerCase()
                        .includes(searchTerms[index].toLowerCase())
                  )
                  .map((u, index) => (
                    <li
                      key={index}
                      onClick={() => router.push(`plis/${u.id}`)}
                      className="border transition-all duration-500 hover:bg-primary/10 border-border cursor-pointer  px-4 flex items-center h-[68px] rounded-[6px]"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          width={44}
                          height={44}
                          src={u.avatar}
                          alt="avatar"
                          className=" rounded-[5px]"
                        />
                        <div className="flex flex-col">
                          <p className="text-t-15 font-semibold">{u.name}</p>
                          <p className="text-[0.8125em] font-normal text-silver_text-foreground">
                            {u.username}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plis;
