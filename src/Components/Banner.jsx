import React from "react";
import Bannerimg from "../assets/Green Nest.png";
import verifiedimg from "../assets/verified-symbol-icon.svg";
import activeimg from "../assets/Readers Png.png";
import { ArrowRightToLine } from "lucide-react";

export default function Banner() {
  return (
    <div>
      <section className="grid grid-cols-10 ">
        <div className="col-span-3">
          <div className="bg-black rounded-2xl flex items-center flex-col p-6 mt-6">
            <div className="flex items-center-safe gap-x-2 "><img className="w-8" src={verifiedimg} alt="" /> <h3 className="text-2xl font-bold text-white text-center"> 100%</h3>
            </div>
            <p className="text-3xl font-bold text-white my-4">Satisfied Clients</p>
            <p className="text-gray-400 text-center">Our customers love how easy and joyful plant care becomes with GreenNest.</p>
          </div>
          <div className="bg-gray-200 rounded-2xl flex items-center flex-col p-6 mt-6">
            <img className="w-[200px] object-cover" src={activeimg} alt="" />
            <h4 className="text-2xl font-bold">25000+</h4>
            <p>Active Raders</p>
          </div>
        </div>
        {/* Banner Images */}
        <div className="col-span-4">
          <img className="rounded-2xl w-[370px] mx-auto" src={Bannerimg} alt="" />
        </div>

        {/* second banner sections */}
        <div className="col-span-3">
         <div className="flex flex-col items-start gap-y-2 bg-emerald-600 rounded-2xl p-6 mt-6 text-white">
          <h3 className="text-3xl font-bold">70%</h3>
          <p className="mt-8 mb-3">People were convironed and pressur their plant with the help of our guides and products</p>
          <button className="btn btn-sm">Our review <ArrowRightToLine /> </button>
         </div>
         <div className="flex flex-col items-start gap-y-2 bg-gray-200 rounded-2xl p-6 mt-6 text-black">
          <h3 className="text-3xl font-bold">70%</h3>
          <p className="mt-4">People were convironed and pressur their plant with the help of our guides and products</p>
          <button className="btn btn-sm">Our review <ArrowRightToLine /> </button>
         </div>
         <div></div>
        </div>
      </section>
    </div>
  );
}
