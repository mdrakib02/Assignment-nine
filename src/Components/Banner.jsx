import React from "react";
import Bannerimg from "../assets/Green Nest.png";
import verifiedimg from "../assets/verified-symbol-icon.svg";

export default function Banner() {
  return (
    <div>
      <section className="grid grid-cols-10 ">
        <div className="col-span-3">
          <div className="w-80 bg-black h-44 rounded-2xl mx-auto flex items-center flex-col p-6">
           <div className="flex items-center-safe gap-x-2 "><img className="w-8" src={verifiedimg} alt="" /> <h3 className="text-2xl font-bold text-white text-center"> 100%</h3></div>
          </div>
          <div>Satisfaction</div>
        </div>
        {/* Banner Images */}
        <div className="col-span-4">
          <img className="rounded-2xl w-[370px] mx-auto" src={Bannerimg} alt="" />
        </div>
        <div className="col-span-3">

        </div>
      </section>
    </div>
  );
}
