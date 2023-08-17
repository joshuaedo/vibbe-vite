import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import { Router } from "./components/router/Router.jsx";
import { ScrollToTop } from "./components/scroll/ScrollToTop.jsx";
import LocomotiveScroller from "./components/scroll/LocomotiveScroller.jsx";
import NavBar from "./components/navbar/Navbar.jsx";

export function App() {
  return (
    <BrowserRouter>
      <main className="space-y-20 text-white">
        <LocomotiveScroller>
          <ScrollToTop>
            <NavBar />
            <Router />
            <Footer />
          </ScrollToTop>
        </LocomotiveScroller>
      </main>
    </BrowserRouter>
  );
}
