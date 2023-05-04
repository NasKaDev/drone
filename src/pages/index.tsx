import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Team from "../components/Team";

function Home() {
  return (
    <div>
      <Carousel />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
