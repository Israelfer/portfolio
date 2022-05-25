import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

export default function Home() {
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
