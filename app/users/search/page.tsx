"use client";
import TopNavigation from "@/components/TopNavigation";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { v1 as uuidv4 } from "uuid";
const UserSearch = () => {
  const router = useRouter();
  const DATA = [
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
  ];
  return (
    <div>
      <TopNavigation title="Perfil" des="Búsqueda de perfiles" />
      <div className="">
        <Input
          className="border w-full border-border rounded-[6px]  text-sm text-silver_text-foreground"
          type="search"
          placeholder="@username, nombre, correo eletrónico, número telefónico"
        />
        <ul className="space-y-5 pt-5">
          {DATA.map((u, index) => (
            <li
              key={index}
              onClick={() => router.push(`/users/search/${u.id}`)}
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
  );
};

export default UserSearch;
