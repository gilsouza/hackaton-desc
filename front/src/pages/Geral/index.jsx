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
  Rating, Salary, SalaryContainer,
  Section, SectionContainer,
  SectionTitle,
} from './styles';
import { averagePropInList } from '../../util/math';
import { HorizontalLine } from '../Duvidas/styles';
import { BriefCard } from '../../components/BriefCard';
import { QuestionList } from '../../components/QuestionList';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const Geral = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const {
    getRatings, ratings, currentCareer, getBriefs,
    briefs,
    topVoteBrief,
    questions, getQuestions, getSalaries, salaries,
  } = useCareers();

  const wordsGroped = briefs.map((brief) => brief.text).reduce((a, b) => `${a} ${b}`, '').split(' ').reduce((a, value) => {
    const total = a;
    total[value] = (total[value] || 0) + 1;
    return total;
  }, {});
  const words = Object.keys(wordsGroped).map((word) => ({ text: word, value: wordsGroped[word] }));
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
        <SectionTitle>Avaliação média:</SectionTitle>
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
  const salarioAltissimaExperiencia = salaries
    .filter((salarie) => salarie.time_experience === 3)
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
          <SalaryContainer size="lg">
            <Salary size="lg">
              R$
              {parseFloat(salarioMedio).toFixed(2)}
            </Salary>
            <LabelResult>Salário médio total</LabelResult>
          </SalaryContainer>

          <BoxRatings>
            <SalaryContainer>
              <Salary>
                R$
                {parseFloat(salarioBaixaExperiencia).toFixed(2)}
              </Salary>
              <LabelResult>teste</LabelResult>
            </SalaryContainer>
            <SalaryContainer>
              <Salary>
                R$
                {parseFloat(salarioMediaExperiencia).toFixed(2)}
              </Salary>
              <LabelResult>teste</LabelResult>
            </SalaryContainer>
            <SalaryContainer>
              <Salary>
                R$
                {parseFloat(salarioAltaExperiencia).toFixed(2)}
              </Salary>
              <LabelResult>teste</LabelResult>
            </SalaryContainer>
            <SalaryContainer>
              <Salary>
                R$
                {parseFloat(salarioAltissimaExperiencia).toFixed(2)}
              </Salary>
              <LabelResult>teste</LabelResult>
            </SalaryContainer>
          </BoxRatings>
        </GeneralResults>
      </Section>
      <HorizontalLine />
      <Section>
        <SectionTitle>Palavras chaves principais:</SectionTitle>
        <SectionContainer>
          <ReactWordcloud
            style={{ height: 400, width: 600 }}
            words={words}
            options={{
              enableTooltip: true,
              fontFamily: 'impact',
              fontSizes: [5, 80],
              padding: 1,
              scale: 'sqrt',
              spiral: 'archimedean',
            }}
          />
        </SectionContainer>
      </Section>
    </PageContainer>
  );
};

export { Geral };
