/* eslint-disable no-console */
import { useEffect, useMemo } from 'react';
import { Header } from '../../components/Header';
import {
  ContentContainer, HeaderText, PageContainer, RakingHeader, Row, Title,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { averagePropInList } from '../../util/math';
import { PageBackground } from '../Profession/styles';
import { CareerCard } from '../../components/CarrerCard';

const Rankings = () => {
  const { getRatingsWithCareer, ratingsWithCareer } = useCareers();

  useEffect(() => {
    getRatingsWithCareer();
  }, []);

  const sortedCareers = useMemo(() => {
    const grouped = ratingsWithCareer.reduce((rv, x) => {
      // eslint-disable-next-line no-param-reassign
      (rv[x.career.name] = rv[x.career.name] || []).push(x);
      return rv;
    }, {});

    console.log('@@@@', grouped);

    const averages = Object.keys(grouped)
      .map((career) => ({
        career,
        careerId: grouped[career][0].career.id,
        averages: {
          happiness: averagePropInList(grouped[career], 'happiness'),
          salaryRange: averagePropInList(grouped[career], 'salary_range'),
          employability: averagePropInList(grouped[career], 'employability'),
        },
      }));

    return {
      mostEmployability: averages.slice()
        .sort((a, b) => a.averages.employability - b.averages.employability),
      mostSalaryRange: averages.slice()
        .sort((a, b) => a.averages.salary_range - b.averages.salary_range),
      mostHappiness: averages.slice()
        .sort((a, b) => a.averages.happiness - b.averages.happiness),
    };
  }, [ratingsWithCareer]);

  console.log('sortedCareers', sortedCareers);
  const onCardPress = () => {};
  return (
    <>
      <Header />
      <PageBackground>
        <PageContainer>
          <RakingHeader>
            <HeaderText>Ranking de carreiras</HeaderText>
          </RakingHeader>
          {sortedCareers.mostSalaryRange && sortedCareers.mostSalaryRange.length > 0 && (
          <ContentContainer>
            <Title>Top 10 carreiras por salário</Title>
            <Row>
              {sortedCareers.mostSalaryRange.map((s) => (
                <CareerCard
                  onClick={() => onCardPress(s.careerId)}
                  career={s.career}
                  score={s.averages.salaryRange}
                />
              ))}
            </Row>
          </ContentContainer>
          )}
          {sortedCareers.mostHappiness && sortedCareers.mostHappiness.length > 0 && (
          <ContentContainer>
            <Title>Top 10 carreiras por qualidade de vida</Title>
            <Row>
              {sortedCareers.mostHappiness.map((s) => (
                <CareerCard
                  onClick={() => onCardPress(s.careerId)}
                  career={s.career}
                  score={s.averages.happiness}
                />
              ))}
            </Row>
          </ContentContainer>
          )}
          {sortedCareers.mostEmployability && sortedCareers.mostEmployability.length > 0 && (
          <ContentContainer>
            <Title>Top 10 carreiras por empregabilidade</Title>
            <Row>
              {sortedCareers.mostEmployability.map((s) => (
                <CareerCard
                  onClick={() => onCardPress(s.careerId)}
                  career={s.career}
                  score={s.averages.employability}
                />
              ))}
            </Row>
          </ContentContainer>
          )}
        </PageContainer>
      </PageBackground>
    </>
  );
};

export { Rankings };
