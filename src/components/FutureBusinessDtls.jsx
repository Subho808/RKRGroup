import React from 'react';
import { FutureBusinessData } from '../sources/reviewdata';

function FutureBusinessDtls() {
  return (
    <div className="flex flex-row w-full gap-6 lg:gap-8 justify-center flex-wrap py-10 lg:py-14 lg:bg-zinc-100 bg-[#C9D7DD]">
      {FutureBusinessData.map((value, index) => (
        <div 
          key={index} 
          className="text-zinc-700 lg:px-12 px-8 flex flex-col gap-4 lg:gap-5 lg:w-80 w-60 py-6 bg-white rounded-3xl border border-zinc-300 hover:shadow-2xl transition-all duration-300"
        >
          <h1 className="text-5xl text-[#86aebf] flex justify-center">{value.icon}</h1>
          <h1 className="font-bold text-xl lg:text-2xl text-center tracking-tight">{value.title}</h1>
          <ul className="text-sm lg:text-base font-medium tracking-tight list-disc pl-5">
            {value.desc.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FutureBusinessDtls;
