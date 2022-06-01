import { AiFillHtml5 } from 'react-icons/ai';
import { FaWordpress, FaAngular, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import SkillItem from './SkillItem';
import { Container } from './styles';

function Skills() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <SkillItem title="HTML" icon={<AiFillHtml5 />} />
        <SkillItem title="CSS" icon={<FaCss3Alt />} />
        <SkillItem title="JavaScript" icon={<IoLogoJavascript />} />
        <SkillItem title="React" icon={<FaReact />} />
        <SkillItem title="Angular" icon={<FaAngular />} />
        <SkillItem title="Wordpress" icon={<FaWordpress />} />
      </section>
    </Container>
  );
}

export default Skills;
