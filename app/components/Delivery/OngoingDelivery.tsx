import React from 'react' 
import Cycler from "@/public/assets/Cycler";
import Road from "@/public/assets/Road";
import LocationStart from "@/public/assets/LocationStart";
import LocationEnd from "@/public/assets/LocationEnd";
import OrderMessage from "@/public/assets/OrderMessage";
import OrderCall from "@/public/assets/OrderCall";
import { DeliveryDataType, OngoingDeliveryPropsType } from '@/app/Types/Types';
import { DeliveryData } from '@/app/Data/Data';

const OngoingDelivery = ({selectOrder,deliveryIndex}:OngoingDeliveryPropsType) => {
  return (
    <section className='pb-4'>
    <h1 className="text-[1.25rem] pt-6 pb-5 text-white">
      Ongoing Delivery
    </h1>
    <div className="inline-flex flex-col gap-7">
      {DeliveryData.map((e: DeliveryDataType, index: number) => {
        return (
          <div onClick={()=>selectOrder(index)} key={e.clientName} className={`${deliveryIndex===index?"  border-[#EA7C69] shadow-xl shadow-[#C4C4C4]":"border-white"} border-[2px] hover:border-[#EA7C69] hover:cursor-pointer hover:shadow-xl hover:shadow-[#C4C4C4]  rounded-xl px-4 py-6 min-w-[25vw]`}>
            {/* Layer 1  */}
            <div className="flex pb-3 flex-row items-center justify-between">
              {/* text  */}
              <div className="">
                <div className="text-[0.875rem] font-[600]">
                  Shipment number
                </div>
                <div className="text-[1.125rem] font-[600]">
                  {e.shipmentNumber}
                </div>
                <div className="pt-1 text-[0.875rem]">Food Materials</div>
              </div>
              {/* Cycle  */}
              <div className="flex flex-col items-center">
                <Cycler height={88} width={84} />
                <Road height={6} width={156} />
              </div>
            </div>
            <hr />
            {/* Layer 2 */}
            <div className="flex py-4 gap-3">
              {/* Location  */}
              <div className="flex flex-col items-center">
                <LocationStart width={36} height={36} />
                <div className="flex flex-col py-1 items-center gap-1">
                  <div className="h-1 w-[1.1px] bg-white"></div>
                  <div className="h-[0.35rem] w-[1.1px] bg-white"></div>
                  <div className="h-[0.35rem] w-[1.1px] bg-white"></div>
                  <div className="h-[0.35rem] w-[1.1px] bg-white"></div>
                </div>
                <div className="bg-[#E5E5FE] rounded-full p-[0.47rem]">
                  <LocationEnd width={24} height={24} />
                </div>
              </div>
              {/* Address  */}
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="font-[700] text-[1rem]">
                    {e.startAddressPartOne}r
                  </span>
                  <span className="text-[0.75rem]">
                    {e.startAddressPartTwo}{" "}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-[700] text-[1rem]">
                    {e.endAddressPartOne}
                  </span>
                  <span className="text-[0.75rem]">
                    {e.endAddressPartTwo}
                  </span>
                </div>
              </div>
            </div>
            <hr />
            {/* Layer 3  */}
            <div className="pt-5 flex items-center justify-between">
              <div className="flex flex-col pl-10">
                <span className="text-[0.875rem] font-[600]">Client</span>
                <span className="text-[1rem] font-[700]">
                  {e.clientName}
                </span>
                <span className="text-[0.875rem]">{e.clientAddress}</span>
              </div>
              <div className="flex flex-row gap-5">
                <div className="bg-[#F7F5FF] rounded-lg p-2">
                  <OrderCall height={24} width={24} />
                </div>
                <div className="bg-[#F7F5FF] rounded-lg p-2">
                  {e.messageRecieved === "yes" ? (
                    <div className="relative ">
                      <OrderMessage height={24} width={24} />
                      <div className="h-2 w-2 absolute top-[-2px] right-0 rounded-full bg-[#FF0000]"></div>
                    </div>
                  ) : (
                    <OrderMessage height={24} width={24} />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })} 
    </div>
  </section>
  )
}

export default OngoingDelivery