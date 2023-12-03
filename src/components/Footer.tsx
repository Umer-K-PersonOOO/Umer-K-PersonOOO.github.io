import React from "react";
import NavbarEntries from "./NavbarEntries";
const Footer: React.FC = () => {
  return (
    <div className="grid justify-items-center grid-cols-3 bg-slate-500 py-4">
      {/* Maybe link to contact us Page */}
      <div className="my-1 ">
        {" "}
        <img
          className="object-scale-down h-12"
          src={`../static/nci_logo.png`}
          alt="company logo"
        />{" "}
      </div>
      <div className=" flex items-center">Neural Computer Interfaces 2023</div>
      <div className=" flex items-center">idk@gmail.com</div>
    </div>
  );
};

export default Footer;
