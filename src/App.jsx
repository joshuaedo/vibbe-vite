// import { useState } from "react";
// import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
// import Footer from "./components/footer/Footer.jsx";
// import Navbar from "./components/navbar/Navbar.jsx";
import { Router } from "./components/router/Router.jsx";
// import { HomeLoader } from "./components/loader/Loading.jsx";
// import { HeaderProvider } from "./contexts/HeaderContext.jsx";
// import MobileNavbar from "./components/mobile-navbar/MobileNavbar.jsx";
import { ScrollToTop } from "./components/scroll/ScrollToTop.jsx";
// import LocomotiveScroller from "./components/scroll/LocomotiveScroller.jsx";

export function App() {
  // const [loading, setLoading] = useState(true);

  // {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4900);
  // }

  return (
    <BrowserRouter>
      <main className="text-white">
        {/* {loading ? (
          <>
            <HomeLoader />
          </>
        ) : ( */}
        <>
          {/* <HeaderProvider> */}
          {/* <LenisScroller> */}
          {/* <LocomotiveScroller> */}
          <ScrollToTop>
            {/* <Header /> */}
            {/* <Navbar /> */}
            {/* <MobileNavbar /> */}
            <Router />
            {/* <Footer /> */}
          </ScrollToTop>
          {/* </LocomotiveScroller> */}
          {/* </HeaderProvider> */}
        </>
        {/* )} */}
      </main>
    </BrowserRouter>
  );
}
