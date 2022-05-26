import Link from 'next/link';
import { useEffect } from 'react';
import Aos from 'aos';
import { Container } from './styles';
import 'aos/dist/aos.css';

interface ProjetoItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function ProjetoItem({ title, type, imgUrl, slug }: ProjetoItemProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <Container imgUrl={imgUrl} data-aos="fade-up">
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetoItem;
