import React from 'react'
import Filter from "@/public/assets/Filter";
import { OrderReportDataType } from '@/app/Types/Types'; 
import { OrderReportData } from '@/app/Data/Data'; 

const OrderReport = () => {
  return (
    <section className="bg-secondary pt-5 pb-2 mt-5 rounded-xl">
    <div className="flex px-5 flex-row items-center justify-between">
      <div className="text-[1.25rem] font-[600]">Order Report</div>
      <button className="flex items-center p-3 border border-white border-opacity-30 rounded-lg">
        <Filter height={19} width={19} />
        <span className="pl-2 text-[0.875rem]">Filter Order</span>
      </button>
    </div>
    <div className="flex pt-3 flex-row w-full justify-between items-center">
      <div className="px-5 pb-3 w-1/4 font-[600] text-[0.875rem]">
        Customer
      </div>
      <div className="px-5 pb-3 w-1/4 font-[600] text-[0.875rem]">Menu</div>
      <div className="px-5 pb-3 w-1/4 font-[600] text-[0.875rem]">
        Total Payment
      </div>
      <div className="px-5 pb-3 w-1/4 font-[600] text-[0.875rem]">
        Status
      </div>
    </div>
    <div className="hr"></div>
    <div className="h-[39vh] pt-2 overflow-y-auto">
      {OrderReportData.map((e: OrderReportDataType, index: number) => {
        return (
          <div key={e.name} className="flex mt-5 flex-row w-full justify-between">
            <div className="flex px-5 w-1/4 flex-row items-center text-[0.875rem] text-[#E0E6E9] font-[400]">
              <span
                className={`h-8 w-8 rounded-full bg-[${e.pfpBg}] mr-3`}
              ></span>{" "}
              {e.name}
            </div>
            <div className="flex px-5 w-1/4 flex-row items-center text-[0.875rem] text-[#E0E6E9] font-[400]">
              {e.menu}
            </div>
            <div className="flex px-5 w-1/4 flex-row items-center text-[0.875rem] text-[#E0E6E9] font-[400]">
              ${e.totalPayment}
            </div>
            <div className="flex px-5 w-1/4 flex-row items-center text-[0.875rem] text-[#E0E6E9] font-[400]">
              <span
                className={`px-2 py-1 min-w-24 text-center ${
                  e.status === "Pending"
                    ? "text-[#9290FE] bg-[#9290FE]"
                    : e.status === "Completed"
                    ? "text-[#50D1AA] bg-[#50D1AA]"
                    : "text-[#FFB572] bg-[#FFB572]"
                } bg-opacity-15 rounded-full`}
              >
                {e.status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </section>
  )
}

export default OrderReport