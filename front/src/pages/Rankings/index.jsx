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

  console.log(ratingsWithCareer);

  const sortedCareers = useMemo(() => {
    const grouped = ratingsWithCareer.reduce((rv, x) => {
      // eslint-disable-next-line no-param-reassign
      (rv[x.career.name] = rv[x.career.name] || []).push(x);
      return rv;
    }, {});

    const averages = Object.keys(grouped)
      .map((career) => ({
        career,
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

  console.log(sortedCareers);

  return (
    <>
      <Header />
      <PageBackground>
        <PageContainer>
          <RakingHeader>
            <HeaderText>Raking de carreiras</HeaderText>
          </RakingHeader>
          {ratingsWithCareer && ratingsWithCareer.length > 0 && (
          <ContentContainer>
            <Title>Top 10 carreiras por salário</Title>
            <Row>
              <CareerCard
                career={sortedCareers.mostSalaryRange[0].career}
                score={sortedCareers.mostSalaryRange[0].averages.salaryRange}
              />
            </Row>
          </ContentContainer>
          )}
        </PageContainer>
      </PageBackground>
    </>
  );
};

export { Rankings };
