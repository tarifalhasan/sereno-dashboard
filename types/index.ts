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
