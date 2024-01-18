"use client";
import React, { useState } from "react";
import Search from "@/public/assets/Search";
import Filter from "@/public/assets/Filter";
import OngoingDelivery from "./OngoingDelivery";
import TrackOrder from "./TrackOrder";
import SidebarLayout from "../SidebarLayout"; 

const Delivery = () => {
  const [deliveryIndex, setdeliveryIndex] = useState<number>(0);

  const selectOrder = (index: number): void => {
    setdeliveryIndex (index); 
  };
  return (
    <SidebarLayout>
    <div className="py-7 pl-14 pr-5 flex gap-10 text-white h-[100vh] overflow-y-auto">
      <section>
        {/* Search */}
        <div className=" border inline-flex justify-between items-center p-3 border-[#C4C4C4] rounded-lg ">
          <div className="">
            <Search width={20} height={20} />
          </div>
          <input
            type="text"
            placeholder="Search.."
            className="px-2 text-[#C4C4C4] bg-transparent outline-none placeholder:text-[1rem] placeholder:text-[#C4C4C4]"
          />
          <div>
            <Filter width={20} height={20} />
          </div>
        </div>
        {/* Ongoing Delivery  */}
        <OngoingDelivery
          deliveryIndex={deliveryIndex}
          selectOrder={selectOrder}
        />
      </section>
      <TrackOrder deliveryIndex={deliveryIndex} />
    </div>
    </SidebarLayout>
  );
};

export default Delivery;
