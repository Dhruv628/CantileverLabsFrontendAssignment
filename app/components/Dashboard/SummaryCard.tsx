import React from 'react' 
import { SummaryCards } from '@/app/Data/Data';

const SummaryCard = () => {
  return (
    <section className="  pt-5 flex items-center  justify-between w-full  ">
    {SummaryCards.map((e, index) => {
      return (
        <div key={e.value} className="p-4 w-[26%]   bg-secondary rounded-xl space-y-2">
          <div className="flex flex-row items-center">
            <div className="mr-2 p-2 bg-[#9288E0] bg-opacity-10 rounded-lg">
              {e.icon}
            </div>
            <div className={`${e.gain==="profit"?"text-[#50D1AA]":"text-[#FF7CA3]"} text-sm font-[600]`}>{e.gain==="profit"?"+":"-"}{e.percentage}%</div>
            <div className={`${e.gain==="profit"?"bg-[#50D1AA]":"bg-[#FF7CA3]"} ml-1 rounded-full p-1 bg-opacity-20`}>
              {e.arrow}
            </div>
          </div>
          <div className="text-[1.75rem]">{e.value}</div>
          <div className="text-[0.875rem] text-[#ABBBC2]">
           {e.text}
          </div>
        </div>
      );
    })} 
  </section>
  )
}

export default SummaryCard