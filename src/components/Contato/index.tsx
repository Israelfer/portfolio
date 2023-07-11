import SectionTitle from '../SectionTitle';
// import Form from './Form';
import { Container } from './styles';

function Contato() {
  return (
    <Container>
      <SectionTitle
        title="Entre em contato"
        description={
          <>
            nas redes sociais abaixo.
            <br />
            Conheça o meu vlog pelo canal no youtube.
          </>
        }
      />
      {/* <Form /> */}
    </Container>
  );
}

export default Contato;
