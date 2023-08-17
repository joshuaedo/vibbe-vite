import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import { Router } from "./components/router/Router.jsx";
import { ScrollToTop } from "./components/scroll/ScrollToTop.jsx";
import LocomotiveScroller from "./components/scroll/LocomotiveScroller.jsx";

export function App() {
  return (
    <BrowserRouter>
      <main className="text-white space-y-20">
          <LocomotiveScroller>
            <ScrollToTop>
              <Router />
              <Footer />
            </ScrollToTop>
          </LocomotiveScroller>
      </main>
    </BrowserRouter>
  );
}
