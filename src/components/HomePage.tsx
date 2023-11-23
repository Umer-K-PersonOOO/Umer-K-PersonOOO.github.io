import LeftText from "./LeftText";
import RightText from "./RightText";
import Title from "./Title";
import ImagePopup from "./ImagePopup";
import { useState } from "react";

function HomePage() {
  const [imgUrl, setUrl] = useState<string>("");
  const [isOn, setIsOn] = useState(false);
  const handleClose = () => setUrl("");
  return (
    <div>
      <Title />
      <LeftText
        text="A personal AI assisstant designed to simplify and accelerate your
          reasearch, data analysis, and programming"
        name="nbslogo.png"
        alt="Microchip Diagram"
        handleClick={setUrl}
      />
      <RightText
        text="A second brain that lets you focus on ***your*** science instead of computer science"
        name="nbslogo.png"
        alt="Microchip Diagram"
        handleClick={setUrl}
      />
      <ImagePopup img={imgUrl} turnOff={setUrl} />
    </div>
  );
}

export default HomePage;
