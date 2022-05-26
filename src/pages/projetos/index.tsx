import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from './ProjetosStyle';

export default function Projects() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          title="Desafio Suzano"
          type="Melhorando a acessibilidade"
          imgUrl="https://raw.githubusercontent.com/Israelfer/reality-desafio-suzano/main/assets/images/print-site.png"
          slug="desafio-suzano"
        />
        <ProjetoItem
          title="Desafio Suzano"
          type="Melhorando a acessibilidade"
          imgUrl="https://raw.githubusercontent.com/Israelfer/reality-desafio-suzano/main/assets/images/print-site.png"
          slug="desafio-suzano"
        />
        <ProjetoItem
          title="Desafio Suzano"
          type="Melhorando a acessibilidade"
          imgUrl="https://raw.githubusercontent.com/Israelfer/reality-desafio-suzano/main/assets/images/print-site.png"
          slug="desafio-suzano"
        />
        <ProjetoItem
          title="Desafio Suzano"
          type="Melhorando a acessibilidade"
          imgUrl="https://raw.githubusercontent.com/Israelfer/reality-desafio-suzano/main/assets/images/print-site.png"
          slug="desafio-suzano"
        />
      </main>
    </ProjetosContainer>
  );
}
