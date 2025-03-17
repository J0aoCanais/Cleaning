import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import RecentCleanings from "./recent-cleanings";
import Stats from "./stats";
import Services from "./services";
import Testimonials from "./testimonials";
import Contact from "./contact";
import Footer from "./footer";

function Home() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <About />
        <RecentCleanings />
        <Stats />
        <Services />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
