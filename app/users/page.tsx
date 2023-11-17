import ResportsCard from "@/components/reportes/ResportsCard";
import UserAnalytics from "@/components/user/UserAnalytics";

const Users = () => {
  return (
    <div>
      <h2 className="heading1">Usuarios</h2>
      <div className=" overflow-hidden grid gap-5 xl:gap-6 xl:grid-cols-2">
        <UserAnalytics />
        <div>
          <div className=" grid gap-7 sm:grid-cols-2  ">
            <ResportsCard />
            <ResportsCard />
            <ResportsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
