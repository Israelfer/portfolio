import { CodeItem, Container, InfosContainer, TextContainer } from './styles';
import picture from '../../assets/profile.jpg';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Foto de perfil de Israel" />
      <div>
        <TextContainer>
          <h1>Hey,</h1>
          <h2>me chamo Israel</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos </span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">Israel Batista</span>
            </div>
            <div>
              Idade: <span className="blue">26 anos</span>
            </div>
            <div>
              Hobbies: <span className="blue">Viajar e futebol</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Stack </span>
            {'\u007B'}
            <div>
              Função: <span className="blue">Desenvolvedor Front-end</span>
            </div>
            <div>
              Cursando:{' '}
              <span className="blue">
                Análise e Desenvolvimento <br />
                de Sistemas
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
