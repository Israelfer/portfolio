import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />
      <section>
        <ProjectItem
          img="https://raw.githubusercontent.com/Israelfer/reality-desafio-suzano/main/assets/images/print-site.png"
          title="Desafio Suzano"
          type="Melhorando a acessibilidade"
          slug="desafio-suzano"
        />
        <ProjectItem
          img="https://raw.githubusercontent.com/Israelfer/reality-desafio-suzano/main/assets/images/print-site.png"
          title="Projeto 02"
          type="Website"
          slug="teste2"
        />
        <ProjectItem
          img="https://raw.githubusercontent.com/Israelfer/reality-desafio-suzano/main/assets/images/print-site.png"
          title="Projeto 03"
          type="Website"
          slug="teste3"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
