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
  LabelResultGeral, LabelResultSalary,
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
import { Card } from '../../styles/global-components';

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
        <Card>
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
        </Card>
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

  function renderWordCloud() {
    return (
      <Section>
        <SectionTitle>{`Quando um Profissional de ${currentCareer.name} pensa na profissão, ele lembra de:`}</SectionTitle>
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
    );
  }

  function renderSalaries() {
    return (
      <Section>
        <SectionTitle>Salário médio:</SectionTitle>
        <Card>
          <SalaryContainer size="lg">
            <Salary size="lg">
              {`R$ ${parseFloat(salarioMedio).toFixed(2)}`}
            </Salary>
            <LabelResult>Salário médio total</LabelResult>
          </SalaryContainer>

          <BoxRatings>
            {!!salarioBaixaExperiencia && (
            <SalaryContainer>
              <Salary>
                {`R$ ${parseFloat(salarioMedio).toFixed(2)}`}
              </Salary>
              <LabelResultSalary>Salario médio até 1 ano de experiência</LabelResultSalary>
            </SalaryContainer>
            )}
            {!!salarioMediaExperiencia && (
            <SalaryContainer>
              <Salary>
                {`R$ ${parseFloat(salarioMediaExperiencia).toFixed(2)}`}
              </Salary>
              <LabelResultSalary>Salário médio de 1 a 3 anos de experiência</LabelResultSalary>
            </SalaryContainer>
            )}
            {!!salarioAltaExperiencia && (
            <SalaryContainer>
              <Salary>
                {`R$ ${parseFloat(salarioAltaExperiencia).toFixed(2)}`}
              </Salary>
              <LabelResultSalary>Salário médio de 3 a 5 anos de experiência</LabelResultSalary>
            </SalaryContainer>
            )}
            {!!salarioAltissimaExperiencia && (
            <SalaryContainer>
              <Salary>
                {`R$ ${parseFloat(salarioAltissimaExperiencia).toFixed(2)}`}
              </Salary>
              <LabelResultSalary>Salário médio de 5 ou mais anos de experiência</LabelResultSalary>
            </SalaryContainer>
            )}
          </BoxRatings>
        </Card>
      </Section>
    );
  }

  return (
    <PageContainer>
      {renderRateSection()}
      <HorizontalLine />
      {topVoteBrief && renderBriefSection()}
      <HorizontalLine />
      {renderDuvidas()}
      {salarioMedio && renderSalaries()}
      <HorizontalLine />
      {words.length > 50 && renderWordCloud()}
    </PageContainer>
  );
};

export { Geral };
