import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AlignJustify, X } from 'lucide-react';
import { NavLinks } from '../../utils/HomePageData';
import { providerContext } from '../../providers/Provider';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { user, logOutUser } = useContext(providerContext);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="shadow w-full z-50 px-5">
      <div className="container items-center py-4 flex justify-between">
      <Link to={'/'}>
          <div className="flex flex-col items-center">
            <img
              src="/amraotech-icon-black.png"
              alt="amraotech"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <p>
              <span className="font-bold">amrao</span>
              <span>tech</span>
            </p>
          </div>
        </Link>

        <nav className="hidden py-2 md:flex gap-5 text-sm xl:text-base uppercase font-semibold">
          {NavLinks?.map((item, index) => (
            <Link to={item?.path} key={index}>
              {item?.name}
            </Link>
          ))}
        </nav>

        <div className="hidden font-semibold text-sm md:flex xl:text-base">
          {user ? (
            <button onClick={logOutUser} className="uppercase">
              Logout
            </button>
          ) : (
            <div className="flex gap-2 items-center">
              <Link to={'/join'}>
                <button className="custom-btn w-20 uppercase bg-dark text-light px-2 py-1">
                  Join
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileNav} className="text-xl text-brand focus:outline-none">
            {isMobileNavOpen ? <X size={22} /> : <AlignJustify size={22} />}
          </button>
        </div>

        <nav
          className={`fixed bg-primary text-dark font-semibold inset-0 top-0 z-50 flex h-screen transform flex-col justify-between bg-brand text-lg transition-transform duration-700 md:hidden ${
            isMobileNavOpen
              ? 'border-r border-dark/20 z-50 w-[60%] opacity-100'
              : 'max-w-[0%] opacity-0'
          }`}
        >
          <div className="container flex flex-col gap-5 p-4">
            {NavLinks?.map((item, index) => (
              <Link
                to={item?.path}
                className="nav-item text-sm hover:font-bold"
                key={index}
                onClick={toggleMobileNav}
              >
                {item?.name}
              </Link>
            ))}
          </div>

          <div className="p-4">
            <span className="text-xs font-semibold">
              Amarotech &copy; {new Date().getFullYear()}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
