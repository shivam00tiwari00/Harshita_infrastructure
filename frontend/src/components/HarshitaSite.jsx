import { useReveal } from "./hooks";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsappFAB from "./WhatsappFAB";

export default function HarshitaSite() {
  useReveal();
  return (
    <div data-testid="harshita-site-root" className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsappFAB />
    </div>
  );
}
