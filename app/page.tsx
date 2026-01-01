import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
