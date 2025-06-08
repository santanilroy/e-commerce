import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet } from "react-router";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="md:w-full h-[80px]  flex justify-between items-center px-10 bg-[#D2FF72]">
        <h1 className="poppins-bold text-3xl cursor-pointer">ShopSphere.</h1>
        <div className="hidden md:flex justify-center items-center gap-5 poppins-bold">
          <Link className="hover:scale-115 duration-250 transition" to="/">
            Home
          </Link>
          <Link className="hover:scale-115 duration-250 transition" to="/shop">
            Shop
          </Link>
          <Link className="hover:scale-115 duration-250 transition" to="/new">
            New arrivals
          </Link>
          <Link
            className="hover:scale-115 duration-250 transition"
            to="/contact"
          >
            Contact
          </Link>
        </div>

        <div className="w-[200px] flex justify-center items-center gap-7">
          <IoIosSearch size={30} className="hover:scale-110 duration-200" />
          <FaShoppingCart size={30} className="hover:scale-110 duration-200" />
          <MdAccountCircle size={30} className="hover:scale-110 duration-200" />
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[48%] h-full border-r bg-r-[#D2FF72] bg-gray-950 ease-in-out duration-300"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl text-[#D2FF72] font-bold m-4 poppins-bold cursor-pointer">
            ShopSphere.
          </h1>
          <div className="flex flex-col justify-center items-center gap-5 poppins-bold text-[#D2FF72]">
            <Link className="hover:scale-115 duration-250 transition" to="/">
              Home
            </Link>
            <Link
              className="hover:scale-115 duration-250 transition"
              to="/shop"
            >
              Shop
            </Link>
            <Link className="hover:scale-115 duration-250 transition" to="/new">
              New arrivals
            </Link>
            <Link
              className="hover:scale-115 duration-250 transition"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="hover:scale-115 duration-250 transition"
              to="/cart"
            >
              Cart
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
