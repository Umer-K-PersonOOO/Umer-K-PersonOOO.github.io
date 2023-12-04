import React from "react";
import { Link } from "react-router-dom";
import RightText from "./RightText";
import LeftText from "./LeftText";
import AboutText from "./AboutText";
import Title from "./Title";
import AxonProduct from "./AxonProduct";
import Footer from "./Footer";
import { useState } from "react";

const AboutPage: React.FC = () => {
  const [imgUrl, setUrl] = useState<string>("");
  return (
    <div className="">
      <RightText
        text="Despite all our advances in computing, computers are still fundementally unintuitive"
        name="nbslogo.png"
        alt="Demonstration"
        handleClick={setUrl}
      ></RightText>
      <LeftText
        text="This probelm is exaserbated in the computational sciences fields"
        name="nbslogo.png"
        alt="Current software"
        bgColor="cat-night-background"
        textColor="cat-night-white"
        handleClick={setUrl}
      />
      <AboutText />
      <RightText
        text="We improve computer useability with Artificial Intelligence and neural networks"
        name="nbslogo.png"
        alt="Neural Computer Interfaces"
        handleClick={setUrl}
      ></RightText>
      <Title />
      <AxonProduct />
      {/* Product RoadMap component */}
      {/* Make it a socials footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
