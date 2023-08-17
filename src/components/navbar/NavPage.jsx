import { HamburgerEnabledIcon } from "../image/Image.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavPage({ toggleNavPage }) {
  return (
    <motion.div
      className="nav_background fixed inset-0 z-50"
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <div className="relative h-full">
        <HamburgerEnabledIcon toggleNavPage={toggleNavPage} />
        <div className="grid h-full grid-cols-1 place-content-center space-y-4 pl-5 pt-12 text-4xl font-bold">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/docs">
            Docs
          </Link>
          <Link className="nav-link" to="/explore">
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
