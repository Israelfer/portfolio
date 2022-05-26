import { useEffect } from 'react';
import Aos from 'aos';

import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projects />
        <Skills />
        <Contato />
      </main>

      <Footer />
    </HomeContainer>
  );
}
