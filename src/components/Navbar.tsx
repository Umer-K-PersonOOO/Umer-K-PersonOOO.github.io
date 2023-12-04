import React from "react";
import NavbarEntries from "./NavbarEntries";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <div className="flex bg-slate-300">
      <div className="flex-1 bg-slate-300 py-6 shrink">
        <div className="flex justify-left items-center">
          <Link to={"/"}>
            <img
              src={`../static/nci_logo.png`}
              alt="Logo"
              className="object-scale-down h-20 xl:ml-6"
            />
          </Link>
          <div className="rounded bg-slate-600 w-1 py-12 xl:ml-4"></div>
          <div className="flex-1">
            <NavbarEntries />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
