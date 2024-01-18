import React from 'react'
import DeliveryPath from "@/public/assets/DeliveryPath"; 
import LocationEnd from "@/public/assets/LocationEnd";
import Zoom from "@/public/assets/Zoom";
import ZoomLocation from "@/public/assets/ZoomLocation"; 
import { TrackOrderPropsType } from '@/app/Types/Types';
import { DeliveryData } from '@/app/Data/Data';

const TrackOrder = ({deliveryIndex}:TrackOrderPropsType) => {
  return (
    <section className="fixed right-[15%] top-[16%]">
    <div className="fixed bottom-[-6rem] right-3">
      <div className="flex flex-col items-center gap-2">  
      <Zoom height={176} width={100}/> 
      <div className=" -translate-y-24">
      <ZoomLocation height={120} width={120}/>
      </div>
      </div>
    </div>
    <div className=" relative">
      <DeliveryPath height={450} width={450} />
      <div className="absolute top-[-2.3%] left-0 bg-white bg-opacity-60 p-[0.6rem] rounded-full">
        <div className="h-4 w-4 rounded-full bg-[#0EBC93]"></div>
      </div>
      <div className="absolute bottom-[-2%] right-0 bg-white  bg-opacity-60 p-2 rounded-full">
        <LocationEnd width={24} height={24} />
      </div>
      {/* Start Location  */}
      <div className="flex absolute shadow-2xl shadow-[#9ea3b6] items-center justify-center gap-4 p-4 top-[-14%] left-[10%] bg-white rounded-xl ">
        <div className="bg-[#0EBC93] bg-opacity-25 flex items-center justify-center h-10 w-10 rounded-full">
          <div className="h-4 w-4 bg-[#0EBC93] rounded-full"></div>
        </div>
        <div>
          <div className="text-black text-[1rem] font-[700]">{DeliveryData[deliveryIndex].startAddressPartOne}</div>
          <div className="text-[#B0B0B0] text-[0.75rem]">{DeliveryData[deliveryIndex].startAddressPartTwo}</div>
        </div>
      </div>
      {/* End Location  */}
      <div className="flex absolute shadow-2xl shadow-[#9ea3b6] items-center justify-center gap-4 p-4 bottom-[-19%] right-[0] bg-white rounded-xl ">
        <div className="bg-[#5251FA] bg-opacity-25 flex items-center justify-center h-10 w-10 rounded-full">
          <LocationEnd height={24} width={24}/>
        </div>
        <div>
          <div className="text-black text-[1rem] font-[700]">{DeliveryData[deliveryIndex].endAddressPartOne}</div>
          <div className="text-[#B0B0B0] text-[0.75rem]">{DeliveryData[deliveryIndex].endAddressPartTwo}</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TrackOrder