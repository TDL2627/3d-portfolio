import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Testimonials,
  Hero,
  Navbar,
  Skills,
  Projects,
  StarsCanvas,
  ScrollDown
} from "./components";
import { meDesktop } from "./assets";

import ThreeDpc from "./components/canvas/Computers";
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-slate-800 relative z-0">
        <div className="bg-slate-800">
          <Navbar />
          <div className="grid h-screen grid-rows-4 relative  ">
            <Hero />
            <div className="w-full flex flex-row row-span-2">
              <div className="w-full basis-1/2 pt-20 relative">
                <img
                  className="absolute bottom-0 left-0 -ml-5 "
                  src={meDesktop}
                  alt="me"
                />
              </div>
              <ThreeDpc />
            </div>
            {/* scroll down button */}
           <ScrollDown/>
          </div>
          <About />
          <Skills />
          <Projects />
          <Experience />

          <Testimonials />
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
