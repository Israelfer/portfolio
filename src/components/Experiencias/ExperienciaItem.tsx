import { ItemContainer } from './styles';

interface ExperienciaItemProps {
  title: string;
  subtitle: string;
  year: string;
  description: string;
}

export default function ExperienciaItem({
  title,
  subtitle,
  year,
  description
}: ExperienciaItemProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <small>{year}</small>
        <p>- {description}</p>
      </div>
    </ItemContainer>
  );
}
