import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { ExperienceSection } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

function Home() {
  return (
    <main className='min-h-screen bg-linear-to-b from-dark-blue to-darker-blue text-white overflow-hidden'>
      <div className='grid-overlay absolute inset-0 z-0 opacity-20' />
      <Navbar />
      <Hero />
      <About />
      <ExperienceSection />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
