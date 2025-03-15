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
    <div className="w-full max-h-screen bg-white">
      <Navbar className="min-w-max" />
      <Hero />
      <About />
      <RecentCleanings />
      <Stats />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
