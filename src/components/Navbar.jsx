import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <nav className="sticky top-0 z-50">
      <div className="container mx-auto px-4 relative lg:text-sm">
        <div className="py-4 flex justify-between items-center backdrop-blur-lg border-b border-neutral-700/80">
          <div className="flex items-center shrink-0">
            <img className="h-10" src={logo} alt="company logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="gap-12 hidden lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="gap-6 hidden lg:flex">
            <a
              href="#"
              className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-700 rounded-md">
              Create an account
            </a>
          </div>
          <div className="flex-col justify-end lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {
          mobileDrawerOpen &&
          (
            <div className="w-full py-6 flex flex-col justify-between items-center fixed right-0 z-20 bg-neutral-900 lg:hidden">
              <ul className="w-full p-4">
                {navItems.map((item, index) => (
                  <li key={index} className="py-2 hover:bg-neutral-600">
                    <a href={item.href} className="pl-4">{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-700 rounded-md">
                  Create an account
                </a>
              </div>
            </div>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;