import React from "react";
import SummaryCard from "./SummaryCard";
import OrderReport from "./OrderReport";
import MostOrdered from "./MostOrdered";
import MostTypeOfOrder from "./MostTypeOfOrder";
import SidebarLayout from "../SidebarLayout";

const Dashboard = () => {
  return (
    <SidebarLayout>
    <div className="h-full flex justify-between flex-row p-5 text-white">
      {/* Left  */}
      <section className="w-[65%] flex flex-col justify-between">
        <div>
        <div className="pt-2 pb-5">
          <h1 className="text-[1.75rem] font-[600]">Dashboard</h1>
          <div className="text-[1rem] text-[#ABBBC2]">Tuesday 2 Feb, 2021</div>
        </div>
        <div className="hr"></div>
        <SummaryCard />
        </div>
        <OrderReport />
      </section>
      {/* Right */}
      <section className="w-[32%] flex gap-3 flex-col justify-between">
        <MostOrdered />
        <MostTypeOfOrder/>
      </section>
    </div>
    </SidebarLayout>
  );
};

export default Dashboard;
