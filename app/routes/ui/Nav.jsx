import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

function NavLinks() {
  return (
    <>
      <NavLink to="https://admin.shopify.com/store/albionbekaj/apps/marketing-app-31/app">
        Home
      </NavLink>
      <NavLink to="https://admin.shopify.com/store/albionbekaj/apps/marketing-app-31/app/product">
        Product
      </NavLink>
      <NavLink>Solutions</NavLink>
      <NavLink>About</NavLink>
      <NavLink to="https://admin.shopify.com/store/albionbekaj/apps/marketing-app-31//app/contact">
        Contact
      </NavLink>
    </>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavBar() {
    setIsOpen(!isOpen);
    console.log("toggleNavBar");
  }

  return (
    <>
      <nav className="w-2/4 flex justify-end">
        <div className="hidden w-full md:flex justify-between text-base lg:text-xl xl:text-2xl space-x-8 mr-20">
          <NavLinks />
          <AiOutlineUser />
          <IoIosSearch />
          <FiShoppingCart />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>
            {isOpen ? <IoIosClose /> : <CiMenuBurger />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Nav;
