import Analytics1 from "@/components/dashboard/Analytics1";
import OverView from "@/components/dashboard/OverView";
import Statistics from "@/components/dashboard/Statistics";

const Dashboard = () => {
  return (
    <div className=" space-y-6">
      <h2 className=" text-t-25 font-bold leading-normal">Dashboard</h2>
      <OverView />
      <div className="grid xl:grid-cols-2 gap-6">
        <div className="space-y-8">
          {/* Analíticas N1*/}
          <Analytics1 />
          {/* Estadística */}
          <Statistics />
          {/* Analíticas N2*/}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
