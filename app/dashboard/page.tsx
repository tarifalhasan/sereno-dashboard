import Analytics1 from "@/components/dashboard/Analytics1";
import N2Analytics from "@/components/dashboard/N2Analytics";
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
        </div>
        {/* Analíticas N2*/}
        <N2Analytics />
      </div>
    </div>
  );
};

export default Dashboard;
