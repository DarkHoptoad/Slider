import { Logo } from "./components/Logo/Logo";
import { ExSider } from "./components/Slider/ExSlider";
import { Slider } from "./components/Slider/Slider";

function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <Logo />
        </header>
      </div>
      <div className="mainSlider">
        <div className="container">
          <div className="mainSliderContent">
            <h1>Heading</h1>
            <span>
              Lorem ipsum dolor sit amet, consect etur adipiscing elit.
            </span>
            <ExSider />
          </div>
        </div>
      </div>
      <div className="Slider">
        <div className="container">
          <div className="SliderContent">
            <h1>Heading</h1>
            <span>
              Lorem ipsum dolor sit amet, consect etur adipiscing elit.
            </span>
            <h2>Heading</h2>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
