import { CodeItem, Container, InfosContainer, TextContainer } from './styles';
import picture from '../../assets/profile-Israel.jpg';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Foto de perfil de Israel" />
      <div>
        <TextContainer>
          <h1>Hey,</h1>
          <h2>me chamo Israel</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos </span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">Israel Batista</span>
            </div>
            <div>
              Idade: <span className="blue">24 anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
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
