import { IOperationData, IuserData } from "@/types";

export const OperationsDummyData: IOperationData[] = [
  {
    id: 1,
    username: "@johnusuario",
    TxID: "#AKDO2384FV",
    Fecha: "26/08/23 - 18:05",
    Método: "Banesco",
    Monto: "$800",
    Moneda: "2,345 BsD",
    Tiempo: "00:03:56",
  },
  {
    id: 2,
    username: "@tarifalhasan",
    TxID: "#AKDO2dfdf",
    Fecha: "26/08/23 - 18:05",
    Método: "Banesco",
    Monto: "$900",
    Moneda: "5,345 BsD",
    Tiempo: "00:05:56",
  },
];

export const userData: IuserData = {
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
