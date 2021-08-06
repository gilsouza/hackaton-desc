import { useEffect, useMemo } from 'react';
import ReactStars from 'react-stars';
import { useHistory, useLocation } from 'react-router-dom';
import ReactWordcloud from 'react-wordcloud';
import { useCareers } from '../../hooks/Careers';
import {
  BoxRatings,
  GeneralResults,
  LabelRatingResult,
  LabelResult,
  LabelResultGeral,
  PageContainer,
  Rating, Salary,
  Section,
  SectionTitle,
} from './styles';
import { averagePropInList } from '../../util/math';
import { HorizontalLine } from '../Duvidas/styles';
import { BriefCard } from '../../components/BriefCard';
import { QuestionList } from '../../components/QuestionList';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
];

const Geral = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const {
    getRatings, ratings, currentCareer, getBriefs,
    topVoteBrief,
    questions, getQuestions, getSalaries, salaries,
  } = useCareers();

  useEffect(() => {
    getRatings();
    getBriefs();
    getQuestions();
    getSalaries();
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
        size={16}
        edit={false}
        half
        color1="#DDD"
        color2="#00C86F"
      />
      <LabelRatingResult>{average}</LabelRatingResult>
    </Rating>
  );

  function renderRateSection() {
    return (
      <Section withoutTopMargin>
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
      </Section>
    );
  }

  function renderBriefSection() {
    return (
      <Section>
        <SectionTitle>Principal depoimento:</SectionTitle>
        <BriefCard brief={topVoteBrief} />
      </Section>
    );
  }

  function renderDuvidas() {
    return (
      <Section>
        <SectionTitle>Dúvidas recentes:</SectionTitle>
        <QuestionList
          questions={questions}
          maxSize={3}
          handleClick={(currentQuestionId) => {
            history.push(`${pathname}duvidas`, currentQuestionId);
          }}
        />
      </Section>
    );
  }

  const salarioMedio = salaries.reduce((a, b) => ((a + parseFloat(b.value)) / 2), 0);
  const salarioBaixaExperiencia = salaries
    .filter((salarie) => salarie.time_experience === 0)
    .reduce((a, b) => ((a + parseFloat(b.value)) / 2), 0);
  const salarioMediaExperiencia = salaries
    .filter((salarie) => salarie.time_experience === 1)
    .reduce((a, b) => ((a + parseFloat(b.value)) / 2), 0);
  const salarioAltaExperiencia = salaries
    .filter((salarie) => salarie.time_experience === 2)
    .reduce((a, b) => ((a + parseFloat(b.value)) / 2), 0);

  return (
    <PageContainer>
      {renderRateSection()}
      <HorizontalLine />
      {topVoteBrief && renderBriefSection()}
      <HorizontalLine />
      {renderDuvidas()}
      <HorizontalLine />
      <Section>
        <SectionTitle>Salário medio:</SectionTitle>
        <GeneralResults>
          <Salary>
            R$
            {parseFloat(salarioMedio).toFixed(2)}
          </Salary>

          <BoxRatings>
            <Salary>
              R$
              {parseFloat(salarioBaixaExperiencia).toFixed(2)}
            </Salary>
            <Salary>
              R$
              {parseFloat(salarioMediaExperiencia).toFixed(2)}
            </Salary>
            <Salary>
              R$
              {parseFloat(salarioAltaExperiencia).toFixed(2)}
            </Salary>
          </BoxRatings>
        </GeneralResults>
      </Section>
      <div style={{ height: 400, width: 600 }}>
        <ReactWordcloud words={words} />
      </div>
    </PageContainer>
  );
};

export { Geral };
