import { PageContainer } from './styles';
import { useCareers } from '../../hooks/Careers';

const Geral = () => {
  const { currentCareer } = useCareers();
  return <PageContainer>{currentCareer.description}</PageContainer>;
};

export { Geral };
