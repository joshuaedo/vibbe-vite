import NavPage from "./NavPage";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HamburgerDisabledIcon } from "../image/Image";

export default function NavBar() {
  const [isNavPage, setIsNavPage] = useState(false);
  const toggleNavPage = () => {
    setIsNavPage(!isNavPage);
  };

  return (
    <>
      {isNavPage && <NavPage toggleNavPage={toggleNavPage} />}
      <nav id="navbar" className="center-with-flex overflow-x-hidden">
        <div className="-z-1 flex w-screen items-center justify-between rounded-full bg-[#09251E] bg-opacity-30 px-5 py-3 md:px-10 md:py-5 lg:px-20">
          <div className="z-1 flex h-[3rem] w-[5rem] items-center md:h-[4rem] md:w-[9rem] lg:w-[11rem]">
            <img
              src="/images/vibbe-logo.png"
              alt="logo"
              className="object-contain"
            />
          </div>

          {/* <!-- Desktop Nav --> */}
          <div className="hidden items-center space-x-14 lg:flex">
            <span>
              <NavLink to="/docs">Docs</NavLink>
            </span>
            <span>
              <NavLink to="/explore">Explore</NavLink>
            </span>
            <span>
              <NavLink to="/community">Community</NavLink>
            </span>
            <button className="nav-btn">Connect wallet</button>
          </div>

          {/* <!-- Mobile Nav --> */}
          <div className="flex lg:hidden">
            <HamburgerDisabledIcon toggleNavPage={toggleNavPage} />
          </div>
        </div>
      </nav>
    </>
  );
}
