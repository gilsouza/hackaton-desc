import { PageContainer } from './styles';
import { useCareers } from '../../hooks/Careers';

const Geral = () => {
  const { currentCarrer } = useCareers();
  return <PageContainer>{currentCarrer.description}</PageContainer>;
};

export { Geral };
