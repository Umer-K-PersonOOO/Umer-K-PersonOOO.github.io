import React from "react";
import NavbarEntries from "./NavbarEntries";
const Navbar: React.FC = () => {
  return (
    <div className="flex bg-slate-300">
      <div className="flex-1 bg-slate-300 text-center py-16">Division 1</div>
      <div className="flex-none rounded bg-slate-600 w-1 my-4"></div>
      <div className="flex-1">
        <NavbarEntries />
      </div>
    </div>
  );
};

export default Navbar;
