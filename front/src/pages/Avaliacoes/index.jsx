import { useEffect, useMemo } from 'react';
import ReactStars from 'react-stars';
import { useCareers } from '../../hooks/Careers';
import {
  BoxRatings,
  GeneralResults, LabelRatingResult, LabelResult, PageContainer, Rating, TotalResult,
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
      <LabelResult>{`${label}: `}</LabelResult>
      <ReactStars
        value={average}
        count={5}
        size={20}
        edit={false}
        half
        color1="#DDD"
        color2="#00C86F"
      />
      <LabelRatingResult>{average}</LabelRatingResult>
    </Rating>
  );

  return (
    <PageContainer>
      <TotalResult>
        {`> ${ratings.length} avaliações encontradas`}
      </TotalResult>
      <GeneralResults>
        <LabelResult>Avaliação geral:</LabelResult>
        <ReactStars
          value={generalAverage}
          count={5}
          size={54}
          edit={false}
          half
          color2="#00E88F"
          color1="#DDD"
        />
        <LabelRatingResult>{`${generalAverage}`}</LabelRatingResult>
      </GeneralResults>
      <BoxRatings>
        {averages.map((item) => renderRatingBox(item))}
      </BoxRatings>

    </PageContainer>
  );
};

export { Avaliacoes };
