import { HamburgerEnabledIcon } from "../image/Image.jsx";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

export default function NavPage({ toggleNavPage }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white"
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <div className="relative">
        <HamburgerEnabledIcon toggleNavPage={toggleNavPage} />
        <div className="text-black grid grid-cols-1 space-y-4 text-2xl font-bold pt-9 pl-5">
          <Link
            className="nav-link"
            to="/"
          >
            Home
          </Link>
          <Link className="nav-link" to="/docsdocs">
            Docs
          </Link>
          <Link className="nav-link" to="/explorex">
            Explore
          </Link>
          <Link className="nav-link" to="/community">
            Community
          </Link>
          <Link className="nav-link" to="/wallet">
            Connect wallet
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
