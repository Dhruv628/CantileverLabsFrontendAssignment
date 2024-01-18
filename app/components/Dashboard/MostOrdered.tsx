import React from "react";
import Dropdown from "@/public/assets/Dropdown";
import { MostOrderedDataType } from "@/app/Types/Types";
import { MostOrderedData } from "@/app/Data/Data";

const MostOrdered = () => {
  return (
    <div className="bg-secondary rounded-xl p-4">
      <div className="flex flex-row pt-2 pb-5 items-center justify-between">
        <span className="text-[1.25rem] font-[600]">Most Ordered</span>
        <button className="text-[0.875] flex items-center font-[500] gap-3 rounded-lg border border-white p-3 border-opacity-20">
          <span>
            <Dropdown height={14} width={14} />
          </span>{" "}
          Today
        </button>
      </div>
      <div className="hr"></div>
      <div className="pt-4 pb-7 pl-10 flex justify-center">
        <div className=" space-y-4 ">
          {MostOrderedData.map((e: MostOrderedDataType, index: number) => {
            return (
              <div key={e.name} className="flex flex-col">
                <span className="text-[0.875rem] font-[500]">{e.name}</span>
                <span className="text-[0.75rem] font-[400] pt-2">
                  {e.amount} Dishes ordered
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <button className="w-full  border border-[#EA7C69] text-center text-[#EA7C69] rounded-lg p-3">
        View All
      </button>
    </div>
  );
};

export default MostOrdered;
