import React from 'react'
import Circle from "@/public/assets/Circle";
import Dropdown from "@/public/assets/Dropdown";
import { CircleDataType } from '@/app/Types/Types';
import { CircleData } from '@/app/Data/Data';

const MostTypeOfOrder = () => {
  return (
    <div className="bg-secondary rounded-xl px-4 pt-2">
    <div className="flex flex-row pt-2 pb-4 items-center justify-between">
      <span className="text-[1.25rem] font-[600]">
        Most Type of Order
      </span>
      <button className="text-[0.875] flex items-center font-[500] gap-3 rounded-lg border border-white p-3 border-opacity-20">
        <span>
          <Dropdown height={14} width={14} />
        </span>{" "}
        Today
      </button>
    </div>
    <div className="hr"></div>
    <div className='h-[1px] bg-white bg-opacity-15'>
    </div>
    <div className="py-4 flex justify-center items-center gap-5">
      <div>
        <Circle height={175} width={175} />
      </div>
      <div className="flex flex-col gap-2">
        {CircleData.map((e: CircleDataType, index: number) => {
          return (
            <div key={e.type} className="flex items-center gap-3">
              <div
                className={`h-5 w-5 rounded-full ${
                  e.type === "Dine In"
                    ? "bg-[#FF7CA3]"
                    : e.type === "Delivery"
                    ? "bg-[#65B0F6]"
                    : "bg-[#FFB572]"
                }`}
              ></div>
              <div className="flex flex-col ">
                <span className="text-[0.875rem] font-[500]">
                  {e.type}
                </span>
                <span className="text-[0.75rem] font-[400] text-[#ABBBC2]">
                  {e.amount} customers
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default MostTypeOfOrder