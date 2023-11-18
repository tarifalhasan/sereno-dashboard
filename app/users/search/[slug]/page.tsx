import TopNavigation from "@/components/TopNavigation";
import EnabledPaymentMethods from "@/components/plis/EnabledPaymentMethods";
import PLIBankAccounts from "@/components/plis/PLIBankAccounts";
import ProfileOverView from "@/components/plis/ProfileOverView";
import VOTCshAssociatedWithThisPLI from "@/components/plis/VOTC'shAssociatedWithThisPLI";

const UserDetails = () => {
  return (
    <div>
      <TopNavigation title="PLI’s" des="Perfil del PLI" />
      {/* profile info */}
      <div className="border border-border">
        <ProfileOverView />
        {/*Métodos de pago habilitados */}
        <EnabledPaymentMethods />
        {/* PLI Bank Accounts*/}
        <PLIBankAccounts />
        {/* VOTC’sh asociados a este PLI */}
        <VOTCshAssociatedWithThisPLI />
      </div>
    </div>
  );
};

export default UserDetails;
