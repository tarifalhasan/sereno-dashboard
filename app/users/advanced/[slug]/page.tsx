"use client";

import TopNavigation from "@/components/TopNavigation";
import SearchBar from "@/components/ui/search-bar";
import AssociatedBankAccounts from "@/components/user/AssociatedBankAccounts";
import LatestTransactions from "@/components/user/LatestTransactions";
import UserProfileOverview from "@/components/user/UserOverview";
import { useState } from "react";

const UserDetails = () => {
  const latestTransactionData = [
    {
      id: 1,
      username: "@johnusuario",
      TxID: "#AKDO2384FV",
      Fecha: "26/08/23 - 18:05",
      Monto: "$800",
      Moneda: "2,345 BsD",
      Tiempo: "00:03:56",
      Banco: "Banesco",
      transactions_id: "AKDO2384FV",
    },
    {
      id: 2,
      username: "@tarifalhasan",
      TxID: "#AKDO2dfdf",
      Fecha: "26/08/23 - 18:05",
      Monto: "$900",
      Moneda: "5,345 BsD",
      Tiempo: "00:05:56",
      Banco: "Banesco",
      transactions_id: "BKDO2384FV",
    },
  ];
  const AssociatedBankAccountsDATA = [
    {
      id: 1,
      titular: "@johnusuario",
      Nro: "010341915456798759561",
      tercero: "$800",
      Moneda: "BsD",
      Tiempo: "00:03:56",
      Banco: "Banesco",
    },
    {
      id: 2,
      titular: "@tarifalhasan",
      Nro: "010341915456798759561",
      tercero: "$900",
      Moneda: "BsD",
      Tiempo: "00:05:56",
      Banco: "Banesco",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const filteredTransactions = latestTransactionData.filter((transaction) =>
    Object.values(transaction).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const filteredAssociatedBankAccount = AssociatedBankAccountsDATA.filter(
    (data) =>
      Object.values(data).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="space-y-5 xl:space-y-7">
      <div className="flex items-center justify-between">
        <TopNavigation className="flex-1" title="PLI’s" des="Perfil del PLI" />
        <div>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </div>
      </div>
      {/* profile info */}
      <div className="border border-border">
        <UserProfileOverview />

        {/*Últimas transacciones */}
        <LatestTransactions data={filteredTransactions} />

        {/*Cuentas Bancarias Asociadas*/}
        <AssociatedBankAccounts data={filteredAssociatedBankAccount} />
      </div>
    </div>
  );
};

export default UserDetails;
