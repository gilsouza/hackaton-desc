import { useEffect } from 'react';
import { PageContainer } from './styles';
import { useCareers } from '../../hooks/Careers';
import { BriefCard } from '../../components/BriefCard';

const Depoimentos = () => {
  const { getBriefs, briefs, currentCareer } = useCareers();
  useEffect(() => {
    getBriefs();
  }, [currentCareer]);

  return (
    <PageContainer>
      {briefs.length ? briefs.map((brief, index) => (
        <BriefCard
          style={{ marginBottom: index < briefs.length ? '16px' : 0 }}
          brief={brief}
        />
      ))
        : <h2>Nenhum depoimento ainda :(</h2>}
    </PageContainer>
  );
};

export { Depoimentos };
