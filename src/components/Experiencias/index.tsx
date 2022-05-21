import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle
        title="7 Anos"
        description="de experiência com desenvolvimento web"
      />
      <section>
        <ExperienciaItem
          title="Desenvolvedor Front-end"
          subtitle="Accenture Brasil"
          year="Dezembro de 2020 a Maio de 2022"
          description="Angular, TypeScript, Boostrap"
        />
        <ExperienciaItem
          title="Webdesigner"
          subtitle="Instituto João Calvino"
          year="Novembro de 2015 a Novembro de 2020"
          description="Wordpress, CPanel, Photoshop"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
