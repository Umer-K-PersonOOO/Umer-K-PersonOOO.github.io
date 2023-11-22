import LeftText from "./LeftText";
import RightText from "./RightText";
import Title from "./Title";
function HomePage() {
  return (
    <div>
      <Title />
      <LeftText
        text="A personal AI assisstant designed to simplify and accelerate your
          reasearch, data analysis, and programming"
        name="nbslogo.png"
        alt="Microchip Diagram"
      />
      <RightText
        text="A second brain that lets you focus on ***your*** science instead of computer science"
        name="nbslogo.png"
        alt="Microchip Diagram"
      />
    </div>
  );
}

export default HomePage;
