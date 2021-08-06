import { useEffect } from 'react';
import { useCareers } from '../../hooks/Careers';
import { PageContainer } from './styles';

const Avaliacoes = () => {
  const { getRatings, ratings, currentCarrer } = useCareers();

  useEffect(() => {
    getRatings();
  }, [currentCarrer]);

  return (
    <PageContainer>
      {ratings.map((rating) => {
        <span>{rating.happines}</span>;
      })}
    </PageContainer>
  );
};

export { Avaliacoes };
