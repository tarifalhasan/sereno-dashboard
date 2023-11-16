import { VenezuelaCard } from "@/components/pares/ParesCard";

const Users = () => {
  return (
    <div>
      <h2 className="heading1">Usuarios</h2>
      <div className=" grid">
        {/* =====Analíticas usuarios=====   */}

        <div>
          <VenezuelaCard />
        </div>
      </div>
    </div>
  );
};

export default Users;
