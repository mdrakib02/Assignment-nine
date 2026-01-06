import { House, LogIn, TreePalm, TreePine, UserPen } from "lucide-react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/leaves-icon.svg"
import Mylink from "./Mylink";
export default function Header() {
  return (
    <div className="container mx-auto">
      <nav className="py-4">
        <section className="flex items-center justify-between">
          <Link><div className="flex items-end">
            <p className="text-2xl font-bold">
              <span className="text-green-600">Green</span>Nest
            </p>
            <img className="max-w-10" src={logoImg} alt="" />
          </div></Link>
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
          <NavLink to="/login" className=" btn bg-green-600 text-white hover:bg-green-700 border-0 btn-md flex items-center gap-x-2">
            Login <LogIn />
          </NavLink>
        </section>
      </nav>
    </div>
  );
}
