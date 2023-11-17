import TopNavigation from "@/components/TopNavigation";
import CuentasBancariasdelPLI from "@/components/plis/CuentasBancariasdelPLI";
import EnabledPaymentMethods from "@/components/plis/EnabledPaymentMethods";
import VOTCshAssociatedWithThisPLI from "@/components/plis/VOTC'shAssociatedWithThisPLI";

const PlisDetails = () => {
  return (
    <div>
      <TopNavigation title="PLI’s" des="Perfil del PLI" />
      {/*Métodos de pago habilitados */}
      <EnabledPaymentMethods />
      {/* Cuentas Bancarias del PLI */}
      <CuentasBancariasdelPLI />
      {/* VOTC’sh asociados a este PLI */}
      <VOTCshAssociatedWithThisPLI />
    </div>
  );
};

export default PlisDetails;
