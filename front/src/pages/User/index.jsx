import { useEffect, useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useHistory } from 'react-router-dom';
import {
  CarrerHeader,
  ContentContainer,
  PageBackground,
  PageContainer,
  ProfessionHeader,
  ProfessionText,
  BackButton,
  FollowedCareersContainer,
  FollowedCareersTitle,
} from './styles';
import { RateProvider } from '../../hooks/Rate';
import { Header } from '../../components/Header';
import { CareerCard } from '../../components/CarrerCard';

const User = () => {
  const [followedCareers, setFollowedCareers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const careers = JSON.parse(localStorage.getItem('dc-has-followed'));

    setFollowedCareers(careers);
  }, []);

  return (
    <>
      <Header />
      <PageBackground>
        <RateProvider>
          <PageContainer>
            <ProfessionHeader>
              <CarrerHeader>
                <ProfessionText>
                  Perfil
                </ProfessionText>
              </CarrerHeader>
            </ProfessionHeader>
            <ContentContainer>
              <BackButton onClick={() => { history.goBack(); }}>
                <ChevronLeftIcon />
                {' '}
                Voltar
              </BackButton>
              <FollowedCareersContainer>
                <FollowedCareersTitle>
                  Você está seguindo as seguintes carreiras:
                </FollowedCareersTitle>
                {followedCareers.map((car) => (
                  <CareerCard
                    onClick={() => { history.push(`/profissao/${car}/`); }}
                    career={{ name: car }}
                    score={2}
                  />
                ))}
              </FollowedCareersContainer>
            </ContentContainer>
          </PageContainer>
        </RateProvider>
      </PageBackground>
    </>
  );
};

export { User };
