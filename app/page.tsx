import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyAumLab from "@/components/WhyAumLab";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--color-cosmic-purple)] selection:text-white">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <WhyAumLab />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
