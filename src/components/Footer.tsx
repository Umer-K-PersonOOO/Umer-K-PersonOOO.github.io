import React from "react";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <div className="grid justify-items-center xl:grid-cols-3 grid-rows-3 bg-slate-500 py-4">
      <div className="my-1 ">
        {" "}
        <img
          className="object-scale-down h-12"
          src={`../static/nci_logo.png`}
          alt="company logo"
        />{" "}
      </div>
      <div className=" flex items-center">
        Neural Computer Interfaces 2023 | &nbsp;
        <span className="underline text-base hover:text-amber-200 transition-all">
          {" "}
          <Link to={"/contact-us"}>Contact Us!</Link>
        </span>
      </div>
      <div className=" flex items-center">srikarnikhil.kalidasu@gmail.com</div>
    </div>
  );
};

export default Footer;
