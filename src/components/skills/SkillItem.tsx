import { ReactNode } from 'react';
import { SkillContainer } from './styles';

interface SkillsProps {
  title: string;
  icon: ReactNode;
}

export default function SkillItem({ title, icon }: SkillsProps) {
  return (
    <SkillContainer>
      <p>{title}</p>
      {icon}
    </SkillContainer>
  );
}
