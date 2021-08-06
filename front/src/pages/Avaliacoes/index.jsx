import { useEffect, useMemo } from 'react';
import ReactStars from 'react-stars';
import { useCareers } from '../../hooks/Careers';
import { AvatarSmall } from '../../styles/global-components';
import {
  BoxRatings,
  Container,
  LabelResult,
  LabelRatingResult,
  PageContainer,
  Rating,
  RatingsContainer,
  RatingsRow,
  TotalResult,
  UserRow,
  UserName,
} from './styles';

const Avaliacoes = () => {
  const { getRatings, ratings, currentCareer } = useCareers();

  useEffect(() => {
    getRatings();
  }, [currentCareer]);

  const ratingsFormatted = useMemo(() => ratings.map((item) => ({
    rating: item,
    averages: [{
      label: 'Qualidade de vida',
      average: item.happiness,
    }, {
      label: 'Salário',
      average: item.salary_satisfaction,
    }, {
      label: 'Empregabilidade',
      average: item.employability,
    }],
  })), [ratings]);

  const renderRatingBox = ({ label, average }) => (
    <BoxRatings>
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
    </BoxRatings>
  );

  return (
    <PageContainer>
      <TotalResult>
        {`> ${ratings.length} avaliações encontradas`}
      </TotalResult>
      <RatingsContainer>
        {ratingsFormatted.map((item) => (
          <>
            <UserRow>
              <AvatarSmall src={item.rating.user.avatar} />
              <UserName>{item.rating.user.name}</UserName>
            </UserRow>
            <Container>
              <RatingsRow>
                {item.averages.map((r) => renderRatingBox(r))}
              </RatingsRow>
            </Container>
          </>
        ))}
      </RatingsContainer>
    </PageContainer>
  );
};

export { Avaliacoes };
