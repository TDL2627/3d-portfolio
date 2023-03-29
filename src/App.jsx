import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ThreeDpc from "./components/canvas/Computers";
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-black">
          <Navbar />
          <Hero />
          <ThreeDpc />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
