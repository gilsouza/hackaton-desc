/* eslint-disable no-console */
import { useEffect, useMemo } from 'react';
import { Header } from '../../components/Header';
import {
  ContentContainer, HeaderText, PageContainer, RakingHeader, Row, Title,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { PageBackground } from '../Profession/styles';
import { CareerCard } from '../../components/CarrerCard';

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
    return grouped;
  }, [ratingsWithCareer]);

  console.log(groupRatingsByCareer);

  return (
    <>
      <Header />
      <PageBackground>
        <PageContainer>
          <RakingHeader>
            <HeaderText>Raking de carreiras</HeaderText>
          </RakingHeader>
          {groupRatingsByCareer && Object.keys(groupRatingsByCareer).length > 0 && (
          <ContentContainer>
            <Title>Top 10 carreiras por salário</Title>
            <Row>
              <CareerCard career={groupRatingsByCareer.jornalismo[0].career} property="salary_satisfaction" score={groupRatingsByCareer.jornalismo[0].salary_satisfaction} />
            </Row>
          </ContentContainer>
          )}
        </PageContainer>
      </PageBackground>
    </>
  );
};

export { Rankings };
