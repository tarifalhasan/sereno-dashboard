import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { FC } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Input } from "../ui/input";

interface IUserInformation {
    isEditable: boolean;
}

const UserInformation:FC<IUserInformation> = ({isEditable}) => {
  return (
    <form className="flex pb-5 border-b border-border items-center  gap-5 flex-wrap justify-between">
        <div className=" inline-flex items-center gap-2">
          <Image
            src={"/assets/images/image 4.png"}
            width={50}
            height={50}
            alt="tarifalhasan"
            className="rounded-[2px]"
          />
          <TextBlocks title="Sebastián Rojas" dec="PLI" />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-base font-semibold">Status</p>
          {isEditable ? (
            <Select>
              <SelectTrigger className="w-[90px]">
                <SelectValue placeholder="Activo" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="Activo">Activo</SelectItem>
                <SelectItem value="Frozeado">Frozeado</SelectItem>
                <SelectItem value="Baneado">Baneado</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <p className="text-sm font-normal text-silver_text-foreground">
              Usuario Activo
            </p>
          )}
        </div>
        <div className="flex w-[60px] flex-col items-center">
          <p className="text-base font-semibold">País</p>
          {isEditable ? (
            <div>
              <Input placeholder="PE" className="" />
            </div>
          ) : (
            <p className="text-sm font-normal text-silver_text-foreground">
              VE
            </p>
          )}
        </div>
        <div className="flexflex-col items-center">
          <p className="text-base font-semibold">Balance</p>
          <p className="text-sm font-normal text-silver_text-foreground">
            9,497USD
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-base font-semibold">Correo electrónico</p>
          {isEditable ? (
            <div>
              <Input
                placeholder="sebastians@gmail.com"
                type="email"
                className=""
              />
            </div>
          ) : (
            <p className="text-sm font-normal text-silver_text-foreground">
              sebastians@gmail.com
            </p>
          )}
        </div>
        <div className="">
          <p className="text-base font-semibold">Teléfono</p>
          {isEditable ? (
            <div>
              <Input placeholder="+8801779158124" type="email" className="" />
            </div>
          ) : (
            <p className="text-sm font-normal text-silver_text-foreground">
              +8801779158124
            </p>
          )}
        </div>
        <div className="">
          <p className="text-base font-semibold">Tier</p>
          {isEditable ? (
            <div>
              <Input placeholder="+8801779158124" type="email" className="" />
            </div>
          ) : (
            <p className="text-sm font-normal text-silver_text-foreground">
              +8801779158124
            </p>
          )}
        </div>
        <div className="  inline-flex items-center gap-3">
          <Button variant={"success"} className=" gap-1">
            <FaRegEdit size={18} />
            Editar
          </Button>
          <Button variant={"secondary"}>Documentos</Button>
        </div>
      </form>
  )
}

interface ITextBlocks {
    title: string;
    dec: string;
    className?: string;
  }
  
  const TextBlocks: FC<ITextBlocks> = ({ dec, title, className }) => (
    <div className={className}>
      <p className="text-base font-semibold">{title}</p>
      <p className="text-sm font-normal text-silver_text-foreground">{dec}</p>
    </div>
  );
  

export default UserInformation