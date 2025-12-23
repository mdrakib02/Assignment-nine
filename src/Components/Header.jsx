import {  House, TreePalm, TreePine, UserPen } from "lucide-react";
import { Link, NavLink } from "react-router";
import  logoImg from "../assets/leaves-icon.svg"
export default function Header() {
  return (
    <div className="container mx-auto">
      <nav className="py-4">
        <section className="flex items-center justify-between">
          <div className="flex items-end">
            <p className="text-2xl font-bold">
              <span className="text-green-600">Green</span>Nest
            </p>
            <img className="max-w-10" src={logoImg} alt="" />
          </div>
          <ul className="text-base font-semibold flex items-center gap-x-4">
            <li className="flex items-center gap-x-2 btn btn-sm coursor-pointer">
              <House size={18} />
              <NavLink> Home</NavLink>
            </li>
            <li className="flex items-center gap-x-2 btn-sm btn coursor-pointer">
              <TreePine size={18} />
              <NavLink>Plants</NavLink>
            </li>
            <li className="flex items-center gap-x-2 coursor-pointer btn btn-sm ">
              <UserPen size={18} />
              <NavLink>My Profile</NavLink>
            </li>
          </ul> 
          <button className=" btn bg-green-600 text-white hover:bg-green-700 border-0 btn-md flex items-center gap-x-2">
            Buy Tree <TreePalm className="" />
          </button>
        </section>
      </nav>
    </div>
  );
}
