/* eslint-disable no-console */
import { useEffect, useMemo } from 'react';
import { Header } from '../../components/Header';
import { HeaderText, PageContainer, RakingHeader } from './styles';
import { useCareers } from '../../hooks/Careers';
import { averagePropInList } from '../../util/math';

const Rankings = () => {
  const { getRatingsWithCareer, ratingsWithCareer } = useCareers();

  useEffect(() => {
    getRatingsWithCareer();
  }, []);

  const sortedCareers = useMemo(() => {
    const grouped = ratingsWithCareer.reduce((rv, x) => {
      // eslint-disable-next-line no-param-reassign
      (rv[x.careerId] = rv[x.careerId] || []).push(x);
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
      <PageContainer>
        <RakingHeader>
          <HeaderText>Ranking de carreiras</HeaderText>
        </RakingHeader>
      </PageContainer>
    </>
  );
};

export { Rankings };
