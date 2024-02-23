import React from "react";

const Simmer = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((num)=>      
            <div className="w-full bg-white drop-shadow-md rounded-lg" key={num}>
            <div className="animate-pulse w-full h-48 bg-slate-200"></div>
            <div className="p-3 space-y-4">
              <div className="animate-pulse w-2/3 h-6 bg-slate-200"></div>
              <div className="flex space-x-4">
                <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
              </div>
              <div className="space-y-2">
                <div className="animate-pulse w-3/4 h-3 bg-slate-200"></div>
                <div className="animate-pulse w-full h-3 bg-slate-200"></div>
                <div className="animate-pulse w-2/3 h-3 bg-slate-200"></div>
              </div>
            </div>
          </div>)
        }


    </div>
  );
};

export default Simmer;
