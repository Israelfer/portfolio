import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://linkedin.com/israel-batista')
            }
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/israelfer')}
          />
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com/_Israelbatista')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
