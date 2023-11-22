"use client";
import { cn } from "@/lib/utils";
import { ISidebar } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [isOpenChild, setIsOpenChild] = useState<boolean>(false);
  const [clickIndex, setClickIndex] = useState<number>(0);
  const pathName = usePathname();

  console.log(pathName);
  const openChildRoute = (i: number) => {
    setIsOpenChild((prev) => !prev);
    setClickIndex(i);
  };

  const DATA: ISidebar[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "/assets/images/grid-alt.svg",
    },
    {
      label: "Operaciones",
      href: "/operaciones",
      icon: "/assets/images/grid-alt2.svg",
      children: [
        {
          label: "En proceso",
          href: "/operaciones/in-progress",
        },
        {
          label: "En proceso",
          href: "/operaciones/processed",
        },
      ],
    },
    {
      label: "Usuarios",
      href: "/users",
      icon: "/assets/images/user.svg",
      children: [
        {
          label: "Agregar",
          href: "/users/add",
        },
        {
          label: "Búsqueda ",
          href: "/users/search",
        },
        {
          label: "Avanzada ",
          href: "/users/advanced",
        },
      ],
    },
    {
      label: "Pares",
      href: "/pares",
      icon: "/assets/images/inbox.svg",
    },
    {
      label: "PLI’s",
      href: "/plis",
      icon: "/assets/images/invoice-1.svg",
    },
    {
      label: "Reportes",
      href: "/reportes",
      icon: "/assets/images/reports.svg",
    },
  ];

  return (
    <div
      className={cn(
        "bg-dark xl:fixed  left-0 top-0 bottom-0 min-w-[233px] px-5 py-5 h-full min-h-screen"
      )}
    >
      <Link href={"/"} className="">
        <Image
          width={157.99}
          height={30}
          src={"/assets/images/logo.svg"}
          alt="sereno"
        />
      </Link>

      <ul className="flex flex-col gap-y-[10px] pt-12">
        {DATA.map((item, i) => (
          <li key={i} onClick={() => openChildRoute(i)}>
            <Link
              style={{ padding: "8px 12px 8px 15px" }}
              className={cn(
                "flex items-center  justify-between ",
                pathName === item.href && "bg-sidebar_active"
              )}
              href={item.href}
            >
              <span className="flex items-center  gap-[10px] ">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={18}
                  height={18}
                />
                <span className="flex  text-base font-medium text-dark-foreground items-center gap-2">
                  {item.label}
                </span>
              </span>
              {item.children && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path d="M10 6L15 11L10 16L5 11L10 6Z" fill="#DEE4EE" />
                </svg>
              )}
            </Link>
            {item.children && isOpenChild && clickIndex === i && (
              <ul className=" pl-10 pt-3 space-y-2">
                {item.children.map((data, index) => (
                  <li key={index} onClick={() => setIsOpenChild(false)}>
                    <Link
                      className={cn(
                        "text-base font-medium",
                        pathName.startsWith(data.href)
                          ? "text-white"
                          : "text-silver_text"
                      )}
                      href={data.href}
                    >
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
