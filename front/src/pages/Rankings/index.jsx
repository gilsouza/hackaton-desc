/* eslint-disable no-console */
import { useEffect, useMemo } from 'react';
import { Header } from '../../components/Header';
import { HeaderText, PageContainer, RakingHeader } from './styles';
import { useCareers } from '../../hooks/Careers';

const Rankings = () => {
  const { getRatingsWithCareer, ratingsWithCareer } = useCareers();

  useEffect(() => {
    getRatingsWithCareer();
  }, []);

  const groupRatingsByCareer = useMemo(() => {
    const grouped = ratingsWithCareer.reduce((rv, x) => {
      // eslint-disable-next-line no-param-reassign
      (rv[x.careerId] = rv[x.careerId] || []).push(x);
      return rv;
    }, {});
    console.log(grouped);
  }, [ratingsWithCareer]);

  console.log(groupRatingsByCareer);

  return (
    <>
      <Header />
      <PageContainer>
        <RakingHeader>
          <HeaderText>Raking de carreiras</HeaderText>
        </RakingHeader>
      </PageContainer>
    </>
  );
};

export { Rankings };
