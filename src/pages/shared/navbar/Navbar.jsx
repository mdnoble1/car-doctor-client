import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../../assets/logo.svg"

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending text-[#444]" : isActive ? "text-[#ff3811] underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending text-[#444]" : isActive ? "text-[#ff3811] underline" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending text-[#444]" : isActive ? "text-[#ff3811] underline" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending text-[#444]" : isActive ? "text-[#ff3811] underline" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending text-[#444]" : isActive ? "text-[#ff3811] underline" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar container mx-auto h-32 lg:mt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-2xl">
            <FaBars></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
            <img className="w-3/4 lg:w-full mx-auto lg:mx-0" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link><BsHandbag className="text-2xl mr-4 hidden lg:block"></BsHandbag></Link>
        <Link><AiOutlineSearch className="text-3xl mr-8 hidden lg:block"></AiOutlineSearch></Link>
        <Link className="btn btn-outline text-[#ff3811] font-semibold lg:text-lg">Appointment</Link>
      </div>
    </div>
  );
};

export default Navbar;
