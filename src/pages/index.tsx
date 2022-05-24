import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Skills from '../components/skills';
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
        <Skills />
        <Contato />
      </main>

      <Footer />
    </HomeContainer>
  );
}
