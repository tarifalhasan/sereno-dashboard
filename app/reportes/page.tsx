import Cancellations from "@/components/reportes/Cancellations";
import EnteredVolume from "@/components/reportes/EnteredVolume";
import ResportsCard from "@/components/reportes/ResportsCard";
import Transactions from "@/components/reportes/Transactions";

const Reportes = () => {
  return (
    <div className="space-y-5 xl:space-y-10">
      <div className="grid  sm:grid-cols-2  xl:grid-cols-4 gap-5">
        <ResportsCard />
        <ResportsCard />
        <ResportsCard />
        <ResportsCard />
      </div>
      {/* Volumen ingresado */}
      <EnteredVolume />
      {/* Transacciones */}
      <Transactions />
      {/* Cancelaciones */}
      <Cancellations />
    </div>
  );
};

export default Reportes;
