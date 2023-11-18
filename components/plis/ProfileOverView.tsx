import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import { FaRegEdit } from "react-icons/fa";

const ProfileOverView = () => {
  return (
    <div className="border-y  px-5 py-5 lg:py-7  border-border">
      <div className="flex pb-5 border-b border-border items-center  gap-5 flex-wrap justify-between">
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

        <TextBlocks title="Status" dec="Usuario Activo" />
        <TextBlocks title="Balance" dec="9,497USD" />
        <TextBlocks title="Correo electrónico" dec="sebastians@gmail.com" />
        <TextBlocks title="Teléfono" dec="+58 412 0879372" />
        <TextBlocks title="Tier" dec="3" />

        <div className="  inline-flex items-center gap-3">
          <Button variant={"success"} className=" gap-1">
            <FaRegEdit size={18} />
            Editar
          </Button>
          <Button variant={"secondary"}>Documentos</Button>
        </div>
      </div>
      <div className="flex py-5 items-center justify-between gap-6 flex-wrap">
        <TextBlocks
          title="79"
          dec="Tx Completadas"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="35,564USD"
          dec="Fee de Mantenimiento Pagado"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="35,564USD"
          dec="Fee de Vol. Pagado"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="Dirección 5, Edif. 9, Puerto Ordaz, Venezuela"
          dec="Dirección"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="3 minutos"
          dec="Tiempo promedio TX"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="528"
          dec="Tx Canceladas"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks
          title="9,496"
          dec="Tx Aprobadas"
          className=" relative after:top-[27%] after:left-[115%] after:absolute after:w-[5px] after:h-[40px]  after:bg-border after:rounded-[6px]"
        />
        <TextBlocks title="10,264" dec="Tx totales" />
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

export default ProfileOverView;
