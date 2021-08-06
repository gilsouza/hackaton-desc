import { useEffect } from 'react';
import { useCareers } from '../../hooks/Careers';
import { PageContainer } from './styles';

const Avaliacoes = () => {
  const { getRatings, ratings, currentCareer } = useCareers();

  useEffect(() => {
    getRatings();
  }, [currentCareer]);

  return (
    <PageContainer>
      {ratings.map((rating) => <span>{rating.happines}</span>)}
    </PageContainer>
  );
};

export { Avaliacoes };
