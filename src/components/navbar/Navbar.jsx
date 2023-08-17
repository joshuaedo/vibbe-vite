// import NavPage from "./NavPage";

export default function NavBar() {
   return ( 
   <header
      id="navbar"
      className="flex items-center justify-center overflow-x-hidden"
    >
      <p className="section-bg-title mt-24">
        <span className="hidden text-center xl:block">GROOVE</span>
        <span className="hidden text-center xl:block">MUSIC</span>
      </p>
      <nav className="-z-1 flex w-screen items-center justify-between rounded-full bg-[#09251E] bg-opacity-30 px-5 py-3 md:px-10 md:py-5 lg:px-20">
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
            <a href="">Docs</a>
          </span>
          <span>
            <a href="">Explore</a>
          </span>
          <span>
            <a href="">Community</a>
          </span>
          <button className="nav-btn">Connect wallet</button>
        </div>

        {/* <!-- Mobile Nav --> */}
        <div htmlFor="" className="flex lg:hidden">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
)
}