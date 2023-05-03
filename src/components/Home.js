import ScrollToTop from "react-scroll-to-top";

import About from "./About";
import Hobby from "./Hobby";
import Navbar from "./Navbar";
import Project from "./Project";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Project />
      <Hobby />
      <ScrollToTop smooth />
    </>
  );
};

export default Home;
