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
          salarySatisfaction: averagePropInList(grouped[career], 'salary_satisfaction'),
          employability: averagePropInList(grouped[career], 'employability'),
        },
      }));

    return {
      mostEmployability: averages.slice()
        .sort((a, b) => b.averages.employability - a.averages.employability),
      mostSalarySatisfaction: averages.slice()
        .sort((a, b) => b.averages.salarySatisfaction - a.averages.salarySatisfaction),
      mostHappiness: averages.slice()
        .sort((a, b) => b.averages.happiness - a.averages.happiness),
    };
  }, [ratingsWithCareer]);

  console.log('sortedCareers', sortedCareers);

  return (
    <>
      <Header />
      <PageBackground>
        <PageContainer>
          <RakingHeader>
            <HeaderText>Raking de carreiras</HeaderText>
          </RakingHeader>
          {sortedCareers.mostSalarySatisfaction
          && sortedCareers.mostSalarySatisfaction.length > 0 && (
          <ContentContainer>
            <Title>Top 10 carreiras por salário</Title>
            <Row>
              {sortedCareers.mostSalarySatisfaction.map((s) => (
                <CareerCard
                  career={s.career}
                  score={s.averages.salarySatisfaction}
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
