import { useEffect, useMemo } from 'react';
import { useCareers } from '../../hooks/Careers';
import { PageContainer } from './styles';
import { averagePropInList } from '../../util/math';

const Avaliacoes = () => {
  const { getRatings, ratings, currentCarrer } = useCareers();

  useEffect(() => {
    getRatings();
  }, [currentCarrer]);

  const happinessAvarage = useMemo(() => averagePropInList(ratings, 'happiness'), [ratings]);

  const employabilityAvarage = useMemo(() => averagePropInList(ratings, 'employability'),
    [ratings]);

  const salarySatisfactionAvarage = useMemo(() => averagePropInList(ratings, 'salary_satisfaction'),
    [ratings]);

  return (
    <PageContainer>
      <p>{happinessAvarage}</p>
      <p>{employabilityAvarage}</p>
      <p>{salarySatisfactionAvarage}</p>
    </PageContainer>
  );
};

export { Avaliacoes };
