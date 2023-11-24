import LeftText from "./LeftText";
import RightText from "./RightText";
import Title from "./Title";
import ImagePopup from "./ImagePopup";
import { useState } from "react";
import TypewritterTitle from "./TypewritterTitle";

function HomePage() {
  const [imgUrl, setUrl] = useState<string>("");
  const [tTitleseen, setTTitleSeen] = useState(false);
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
      <TypewritterTitle seen={tTitleseen} setSeen={setTTitleSeen} />
    </div>
  );
}

export default HomePage;
