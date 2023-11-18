"use client";
import { IuserData } from "@/types";
import { FC } from "react";
import UserProfileDetails from "./UserDetails";

const UserProfileOverview = () => {
  const userData: IuserData = {
    name: "Sebastián Rojas",
    status: "Activo",
    country: "PE",
    balance: "9,497USD",
    email: "sebastians@gmail.com",
    phone: "+8801779158124",
    tier: "Tier 1",
    txCompletadas: "79",
    txCanceladas: "528",
    feeMantenimiento: "35,564USD",
    feeVol: "35,564USD",
    address: "Dirección 5, Edif. 9, Puerto Ordaz.",
    docId: "v10444333",
  };

  return (
    <div className="border-y  px-5 py-5 lg:py-7  border-border">
      <UserProfileDetails userData={userData} />
      <div className="flex py-5 items-center justify-between gap-6 flex-wrap">
        <TextBlocks
          title="Tx Completadas"
          dec="79"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="Tx Canceladas"
          dec="528"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="Fee de Mantenimiento Pagado"
          dec="35,564USD"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="Fee de Vol. Pagado"
          dec="35,564USD"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="Dirección"
          dec="Dirección 5, Edif. 9, Puerto Ordaz."
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks title="Documento de identidad" dec="v10444333" />
      </div>
    </div>
  );
};
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

export default UserProfileOverview;
