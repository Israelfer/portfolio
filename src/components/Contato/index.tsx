import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function Contato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meu serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />
      <Form />
    </Container>
  );
}

export default Contato;
