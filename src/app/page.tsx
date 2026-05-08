import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import CaseStudies from '@/components/sections/CaseStudies';
import Stats from '@/components/sections/Stats';
import Process from '@/components/sections/Process';
import Technologies from '@/components/sections/Technologies';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <CaseStudies />
      <Process />
      <Technologies />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
