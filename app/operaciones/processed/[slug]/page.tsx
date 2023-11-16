"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { OperationsDummyData } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
const View = () => {
  const pathName = usePathname();
  const router = useRouter();
  const pathSegments = pathName.split("/");
  const id = pathSegments[pathSegments.length - 1];
  const data = OperationsDummyData.find((data) => data.id.toString() === id);

  const THEAD = ["Tipo", "Username", "Fecha", "Banco", "Monto", "Moneda"];

  return (
    <div>
      <div className=" inline-flex items-center   gap-3">
        <FaArrowLeftLong
          onClick={() => router.back()}
          className="text-slate-550 w-8 cursor-pointer h-8"
        />
        <div>
          <p className="text-sm font-medium text-blue-550">Operaciones</p>
          <h2 className="text-base font-normal">{data?.TxID}</h2>
        </div>
      </div>

      <ul className="grid grid-cols-6  py-5">
        <li className="text-base font-semibold ">Tipo</li>
        <li className="text-base font-semibold ">Usuario</li>
        <li className="text-base font-semibold ">Fecha</li>
        <li className="text-base font-semibold ">Banco</li>
        <li className="text-base font-semibold ">Monto</li>
        <li className="text-base font-semibold ">Moneda</li>
      </ul>
      <div className=" border border-border p-5 rounded-[6px]">
        <ul className="grid grid-cols-6  pt-5">
          <li className=" space-y-5">
            <p className="text-base font-normal">
              <span className="text-green font-extrabold">+</span> Buy
            </p>
            <div>
              <h4 className="text-t-15 font-semibold">Estado</h4>
              <p className="text-t-15 font-normal">En proceso </p>
            </div>
            <div>
              <h4 className="text-t-15 font-semibold">Usuario</h4>
              <p className="text-t-15 font-normal">{data?.username} </p>
            </div>
          </li>
          <li className="">
            <p className="text-base font-normal">{data?.username}</p>
          </li>
          <li className="space-y-5">
            <p className="text-base font-normal">{data?.Fecha}</p>
            <div>
              <h4 className="text-t-15 font-semibold">Número de transacción</h4>
              <p className="text-t-15 font-normal">{data?.TxID} </p>
            </div>
            <div>
              <h4 className="text-t-15 font-semibold">Tier</h4>
              <p className="text-t-15 font-normal">2</p>
            </div>
          </li>
          <li className="">
            <p className="text-base font-normal">{data?.Tiempo}</p>
          </li>
          <li className="space-y-5">
            <p className="text-base font-normal">{data?.Monto}</p>
            <div>
              <h4 className="text-t-15 font-semibold">A nombre de</h4>
              <p className="text-t-15 font-normal">$800</p>
            </div>
            <div>
              <h4 className="text-t-15 font-semibold">Ejecutada</h4>
              <p className="text-t-15 font-normal">25/06/23</p>
            </div>
          </li>
          <li className="space-y-5">
            <p className="text-base font-normal">{data?.Moneda}</p>
            <div>
              <h4 className="text-t-15 font-semibold">RSV solicitados</h4>
              <p className="text-t-15 font-normal">880 eUSD</p>
            </div>
            <div>
              <h4 className="text-t-15 font-semibold">Tasa de cambio</h4>
              <p className="text-t-15 font-normal">$980</p>
            </div>
          </li>
        </ul>
        {/* ======= Origen ========== */}
        <div className="border-t border-black my-6  border-opacity-10">
          <h4 className=" text-xl font-extrabold pt-6 pb-3 ">Origen</h4>
          <ul className="grid grid-cols-5">
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Nombre</h4>
                <p className="text-t-15 font-normal">Julio Zambrano </p>
              </div>
            </li>
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Id</h4>
                <p className="text-t-15 font-normal">Cédula</p>
              </div>
            </li>
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Número ID</h4>
                <p className="text-t-15 font-normal">12124154541 </p>
              </div>
            </li>
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Cuenta</h4>
                <p className="text-t-15 font-normal">Ahorros</p>
              </div>
            </li>
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 min-w-max font-semibold">
                  Número de cuenta
                </h4>
                <p className="text-t-15 font-normal">12312341</p>
              </div>
            </li>
          </ul>
        </div>
        {/* ========== Destino =========== */}
        <div className="border-t border-black my-6  border-opacity-10">
          <h4 className=" text-xl font-extrabold pt-6 pb-3 ">Destino</h4>
          <ul className="grid grid-cols-5">
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Nombre</h4>
                <p className="text-t-15 font-normal">Julio Zambrano </p>
              </div>
            </li>
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Id</h4>
                <p className="text-t-15 font-normal">Cédula</p>
              </div>
            </li>
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Número ID</h4>
                <p className="text-t-15 font-normal">12124154541 </p>
              </div>
            </li>
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Cuenta</h4>
                <p className="text-t-15 font-normal">Ahorros</p>
              </div>
            </li>
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Número de cuenta</h4>
                <p className="text-t-15 font-normal">12312341</p>
              </div>
            </li>
          </ul>
        </div>
        {/* =========== Cancelación ============ */}
        <div className="border-t border-black my-6  border-opacity-10">
          <h4 className=" text-xl font-extrabold pt-6 pb-3 ">Cancelación</h4>
          <ul className="grid grid-cols-5">
            <li className="space-y-5">
              <div>
                <h4 className="text-t-15 font-semibold">Razón</h4>
                <p className="text-t-15 font-normal">
                  Monto distinto al acordado
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 items-center justify-between">
        <Button className=" bg-silver_text-foreground text-white">
          Regresar
        </Button>

        <AlertDialog>
          <AlertDialogTrigger className="btn-primary">
            Cancelar
          </AlertDialogTrigger>
          <AlertDialogContent className=" border-l-[6px]  border-l-light-blue">
            <AlertDialogHeader>
              <AlertDialogTitle>Cancelación de TX</AlertDialogTitle>
              <AlertDialogDescription>
                ¿Seguro que deseas cancenlar esta tx?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className=" bg-light-blue hover:bg-light-blue/70">
                Confirmar
              </AlertDialogAction>
              <AlertDialogCancel className=" bg-silver_text-foreground  hover:bg-silver_text-foreground/20 text-white hover:text-black">
                Cancelar
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default View;
