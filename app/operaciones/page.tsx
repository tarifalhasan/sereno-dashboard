import OverView from "@/components/operaciones/OverView";
import Transacciones from "@/components/operaciones/Transacciones";

const Operaciones = () => {
  return (
    <div className="space-y-7">
      <OverView />
      {/* Transacciones */}
      <Transacciones />
    </div>
  );
};

export default Operaciones;
