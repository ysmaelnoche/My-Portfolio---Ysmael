import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
