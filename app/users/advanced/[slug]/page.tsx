import TopNavigation from "@/components/TopNavigation";
import SearchBar from "@/components/ui/search-bar";
import AssociatedBankAccounts from "@/components/user/AssociatedBankAccounts";
import LatestTransactions from "@/components/user/LatestTransactions";
import UserProfileOverview from "@/components/user/UserOverview";

const UserDetails = () => {
  return (
    <div className="space-y-5 xl:space-y-7">
      <div className="flex items-center justify-between">
        <TopNavigation className="flex-1" title="PLI’s" des="Perfil del PLI" />
        <div>
          <SearchBar />
        </div>
      </div>
      {/* profile info */}
      <div className="border border-border">
        <UserProfileOverview />

        {/*Últimas transacciones */}
        <LatestTransactions />

        {/*Cuentas Bancarias Asociadas*/}
        <AssociatedBankAccounts />
      </div>
    </div>
  );
};

export default UserDetails;
