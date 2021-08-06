import { useEffect, useMemo } from 'react';
import ReactStars from 'react-stars';
import { useCareers } from '../../hooks/Careers';
import {
  BoxRatings,
  GeneralResults, LabelRatingResult,
  LabelResult, LabelResultGeral, PageContainer, Rating, SectionTitle,
} from './styles';
import { averagePropInList } from '../../util/math';
import { HorizontalLine } from '../Duvidas/styles';

const Geral = () => {
  const {
    getRatings, ratings, currentCareer, getBriefs, topVoteBrief,
  } = useCareers();

  useEffect(() => {
    getRatings();
    getBriefs();
  }, [currentCareer]);
  console.log('topVoteBrief', topVoteBrief);

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
        size={16}
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
      <SectionTitle>Avaliação media:</SectionTitle>
      <GeneralResults>
        <LabelResultGeral>Avaliação geral:</LabelResultGeral>
        <ReactStars
          value={generalAverage}
          count={5}
          size={24}
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

      <HorizontalLine />
    </PageContainer>
  );
};

export { Geral };
