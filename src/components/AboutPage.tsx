import React from "react";
import { Link } from "react-router-dom";
import RightText from "./RightText";
import LeftText from "./LeftText";
import AboutText from "./AboutText";
import Title from "./Title";
import AxonProduct from "./AxonProduct";
import Footer from "./Footer";
import { useState } from "react";
import ImagePopup from "./ImagePopup";

const AboutPage: React.FC = () => {
  const [imgUrl, setUrl] = useState<string>("");
  return (
    <div className="">
      <RightText
        text="Despite all our advances in computing, computers are still fundamentally unintuitive"
        name="Diagram_be_hard.png"
        bgColor="bg-slate-200"
        alt="Demonstration"
        handleClick={setUrl}
      ></RightText>
      <LeftText
        text="This probelm is exaserbated in the computational sciences fields"
        name="Shell_hard.png"
        alt="Current software"
        bgColor="bg-slate-100"
        textColor="cat-night-white"
        handleClick={setUrl}
      />
      <AboutText />
      <RightText
        text="We improve computer useability with Artificial Intelligence and neural networks"
        name="nbslogo.png"
        bgColor="bg-slate-500"
        alt="Neural Computer Interfaces"
        handleClick={setUrl}
      ></RightText>
      <Title />
      <AxonProduct />
      {/* Product RoadMap component */}
      {/* Make it a socials footer */}
      <Footer />
      <ImagePopup img={imgUrl} turnOff={setUrl} />
    </div>
  );
};

export default AboutPage;
