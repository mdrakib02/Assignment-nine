import {
  House,
  LogIn,
  Menu,
  TreePalm,
  TreePine,
  UserPen,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/leaves-icon.svg";
import Mylink from "./Mylink";
import { useState } from "react";
export default function Header() {
  const [openbtn, setOpenbtn] = useState(false);
  console.log(openbtn);
  const handleOpenbtn = () => {
    setOpenbtn(!openbtn);
  };
  return (
    <div className="container mx-auto">
      <nav className="py-4">
        <section
          className="hidden lg:flex items-center justify-between
"
        >
          <Link>
            <div className="flex items-end">
              <p className="text-2xl font-bold">
                <span className="text-green-600">Green</span>Nest
              </p>
              <img className="max-w-10" src={logoImg} alt="" />
            </div>
          </Link>
          <ul className="text-base font-semibold flex items-center gap-x-4">
            <li className="flex items-center gap-x-2 btn btn-sm coursor-pointer">
              <House size={18} />
              <Mylink to="/">Home</Mylink>
            </li>
            <li className="flex items-center gap-x-2 btn-sm btn coursor-pointer">
              <TreePine size={18} />
              <NavLink to="/plants">Plants</NavLink>
            </li>
            <li className="flex items-center gap-x-2 coursor-pointer btn btn-sm ">
              <UserPen size={18} />
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
          <NavLink
            to="/login"
            className=" btn bg-green-600 text-white hover:bg-green-700 border-0 btn-md flex items-center gap-x-2"
          >
            Login <LogIn />
          </NavLink>
        </section>

        {/* Mobile menu */}
        <section className="block md:hidden lg:hidden px-4 relative">
          <div className="flex justify-between items-center">
            <div>
              <Link>
                <div className="flex items-end">
                  <p className="text-2xl font-bold">
                    <span className="text-green-600">Green</span>Nest
                  </p>
                  <img className="max-w-10" src={logoImg} alt="" />
                </div>
              </Link>
            </div>
            {/* Mobi;e menu ICon */}
            <div onClick={() => handleOpenbtn(setOpenbtn(!true))} className="">
              {openbtn ? <X /> : <Menu />}
            </div>
          </div>
          <div 
            className={` 
    absolute  right-0 z-10
    transition-all duration-1000 ease-out
    transform flex w-full justify-end px-4
    ${openbtn ? "opacity-100 translate-y-6 top-14" : "opacity-0 -translate-y-6 pointer-events-none -top-40"}
  `}
          >
            <div className=" bg-white p-4 rounded-md shadow-md w-full">
              <ul className="text-base font-semibold flex flex-col gap-y-4 ">
                <li className="flex items-center gap-x-2 btn btn-sm cursor-pointer justify-start">
                  <House size={18} />
                  <Mylink to="/">Home</Mylink>
                </li>
                <li className="flex items-center gap-x-2 btn btn-sm cursor-pointer justify-start">
                  <TreePine size={18} />
                  <NavLink to="/plants">Plants</NavLink>
                </li>
                <li className="flex items-center gap-x-2 btn btn-sm cursor-pointer justify-start">
                  <UserPen size={18} />
                  <NavLink to="/profile">My Profile</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
}
