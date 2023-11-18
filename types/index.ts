export interface ISidebar {
  label: string;
  icon: string;
  href: string;
  children?: any[];
}
export interface IOperationData {
  id: number;
  username: string;
  TxID: string;
  Fecha: string;
  Método: string;
  Monto: string;
  Moneda: string;
  Tiempo: string;
}
export interface IuserData {
  name: string;
  status: string;
  country: string;
  balance: string;
  email: string;
  phone: string;
  tier: string;
  txCompletadas: string;
  txCanceladas: string;
  feeMantenimiento: string;
  feeVol: string;
  address: string;
  docId: string;
}
