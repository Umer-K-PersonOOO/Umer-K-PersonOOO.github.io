import React from "react";
import NavbarEntries from "./NavbarEntries";
const Navbar: React.FC = () => {
  return (
    <div className="flex bg-slate-300">
      <div className="flex-1 bg-slate-300 py-6 shrink">
        <div className="flex justify-center">
          <img
            src={`../static/nci_logo.png`}
            alt="Logo"
            className="object-scale-down h-20"
          />
        </div>
      </div>
      <div className="flex-none rounded bg-slate-600 w-1 my-4"></div>
      <div className="flex-1">
        <NavbarEntries />
      </div>
    </div>
  );
};

export default Navbar;
