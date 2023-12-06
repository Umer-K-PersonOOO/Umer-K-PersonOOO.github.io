import LeftText from "./LeftText";
import RightText from "./RightText";
import Title from "./Title";
import ImagePopup from "./ImagePopup";
import GithubLink from "./GithubLink";
import { useEffect, useState } from "react";
import TypewritterTitle from "./TypewritterTitle";
import TerminalLeft from "./TerminalLeft";
import RightItalized from "./RightItalized";
import PlannedFeatures from "./PlannedFeatures";
import AETitle from "./AETitle";
import AEPlannedFeatures from "./AEPlannedFeatures";
import AEText from "./AEText";
import AxonTitle from "./AxonTitle";
import VoteText from "./VoteText";
import Footer from "./Footer";

function HomePage() {
  const [imgUrl, setUrl] = useState<string>("");
  const [tTitleseen, setTTitleSeen] = useState(false);
  const [aETitleseen, setAETitleSeen] = useState(false);
  return (
    <div>
      <Title />
      <LeftText
        text="A personal AI assisstant designed to simplify and accelerate your
          reasearch, data analysis, and programming."
        name="axon_module.png"
        bgColor="bg-cat-wild-sand"
        alt="Microchip Diagram"
        handleClick={setUrl}
      />
      <RightItalized handleClick={setUrl} />
      <TypewritterTitle seen={tTitleseen} setSeen={setTTitleSeen} />
      <LeftText
        text="Validates your commands to catch your mistakes."
        name="nbslogo.png"
        alt="Screenshot"
        bgColor="bg-cat-night-background"
        textColor="text-cat-night-white"
        handleClick={setUrl}
      />
      <TerminalLeft
        text="Works with you for reasearch help, tech support, and debugging assistance."
        name="HelpReasearch.png"
        bgColor="bg-cat-night-background"
        alt="Screenshot"
        textColor="text-cat-night-white"
        handleClick={setUrl}
      />
      <LeftText
        text="Performes natural language tasks by generating Python code."
        name="python_execute.png"
        bgColor="bg-cat-night-background scale-[1]"
        textColor="text-cat-night-white"
        alt="Screenshot"
        handleClick={setUrl}
      />
      <GithubLink />
      <PlannedFeatures />
      <AETitle />
      <AEText />
      <AEPlannedFeatures />
      <AxonTitle />
      <LeftText
        text="Putting the power of Axon into the hands of scienctists and developers around the world."
        name="these_hands.png"
        alt="Microchip Diagram"
        handleClick={setUrl}
        bgColor="bg-gray-600" // Add to tailwind config
        textColor="text-cat-night-white"
      />
      <RightText
        text="Develop your own apps that leverage Axon's full suite of services."
        name="mobile_make.svg"
        bgColor="bg-stone-200"
        alt="Screenshot"
        textColor="text-black"
        handleClick={setUrl}
        passIn="w-60"
      />
      <LeftText
        text="Supporting a thriving open source community with free access of API services and Axon-Powered apps for anyone with an Axon license."
        name="api.png"
        bgColor="bg-gray-600"
        textColor="text-cat-night-white"
        alt="Microchip Diagram"
        handleClick={setUrl}
      />
      <RightText
        text="Connecting software developers and companies with global reasearch labs in the Axon Marketplace. "
        name="people.png"
        bgColor="bg-stone-200"
        alt="Screenshot"
        textColor="text-black"
        handleClick={setUrl}
      />
      <VoteText />
      <Footer />
      <ImagePopup img={imgUrl} turnOff={setUrl} />
    </div>
  );
}

export default HomePage;
