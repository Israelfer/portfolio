import { ReactNode } from 'react';
import { ConhecimentoContainer } from './styles';

interface SkillsProps {
  title: string;
  icon: ReactNode;
}

export default function SkillItem({ title, icon }: SkillsProps) {
  return (
    <ConhecimentoContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </ConhecimentoContainer>
  );
}
