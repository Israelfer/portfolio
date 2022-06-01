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
            Me add no Discord: <i>Learsi#9126</i> <br /> Ou entre em contato nas
            redes sociais abaixo!
          </>
        }
      />
      {/* <Form /> */}
    </Container>
  );
}

export default Contato;
