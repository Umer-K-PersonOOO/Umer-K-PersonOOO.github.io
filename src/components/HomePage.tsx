import LeftText from "./LeftText";
import RightText from "./RightText";
import Title from "./Title";
import ImagePopup from "./ImagePopup";
import GithubLink from "./GithubLink";
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
      <LeftText
        text="Validates your commands to catch your mistakes"
        name="nbslogo.png"
        alt="Screenshot"
        bgColor="cat-night-background"
        textColor="cat-night-white"
        handleClick={setUrl}
      />
      <LeftText
        text="||||| with you for reasearch help, tech support, and debugging assistance"
        name="nbslogo.png"
        bgColor="cat-night-background"
        alt="Screenshot"
        textColor="cat-night-white"
        handleClick={setUrl}
      />
      <LeftText
        text="Performes natural language tasks by generating Python code"
        name="nbslogo.png"
        bgColor="cat-night-background"
        textColor="cat-night-white"
        alt="Screenshot"
        handleClick={setUrl}
      />
      <GithubLink></GithubLink>
    </div>
  );
}

export default HomePage;
