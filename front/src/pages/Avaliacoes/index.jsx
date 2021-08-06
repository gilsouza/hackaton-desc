import { useEffect, useMemo } from 'react';
import ReactStars from 'react-stars';
import { useCareers } from '../../hooks/Careers';
import {
  BoxRatings,
  GeneralResults, LabelResult, PageContainer, Rating, TextResult, TotalResult,
} from './styles';
import { averagePropInList } from '../../util/math';

const Avaliacoes = () => {
  const { getRatings, ratings, currentCareer } = useCareers();

  useEffect(() => {
    getRatings();
  }, [currentCareer]);

  const happinessAverage = useMemo(() => averagePropInList(ratings, 'happiness'), [ratings]);

  const employabilityAverage = useMemo(() => averagePropInList(ratings, 'employability'),
    [ratings]);

  const salarySatisfactionAverage = useMemo(() => averagePropInList(ratings, 'salary_satisfaction'),
    [ratings]);

  const generalAverage = ((happinessAverage + employabilityAverage + salarySatisfactionAverage) / 3)
    .toFixed(1);

  const averages = [{
    label: 'Qualidade de vida',
    average: happinessAverage,
  },
  {
    label: 'Salário',
    average: salarySatisfactionAverage,
  },
  {
    label: 'Empregabilidade',
    average: employabilityAverage,
  },
  ];

  const renderRatingBox = ({ label, average }) => (
    <Rating key={label}>
      <LabelResult>{`${label} ${average}`}</LabelResult>
      <ReactStars
        value={average}
        count={5}
        size={20}
        edit={false}
        half
        color1="#DDD"
        color2="#00E88F"
      />
    </Rating>
  );

  return (
    <PageContainer>
      <TotalResult>
        {`${ratings.length} avaliações encontradas`}
      </TotalResult>
      <GeneralResults>
        <LabelResult>avaliação geral:</LabelResult>
        <TextResult>{`${generalAverage}`}</TextResult>
        <ReactStars
          value={generalAverage}
          count={5}
          size={20}
          edit={false}
          half
          color2="#00E88F"
          color1="#DDD"
        />
      </GeneralResults>
      <BoxRatings>
        {averages.map((item) => renderRatingBox(item))}
      </BoxRatings>

    </PageContainer>
  );
};

export { Avaliacoes };
