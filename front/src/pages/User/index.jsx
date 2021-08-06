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
import { useCareers } from '../../hooks/Careers';

const User = () => {
  const [followedCareers, setFollowedCareers] = useState([]);
  const [allCareers, setAllCareers] = useState([]);

  const { getAllCareers } = useCareers();
  const history = useHistory();

  useEffect(() => {
    async function asyncCareers() {
      const carrr = await getAllCareers();

      setAllCareers(carrr);
    }

    asyncCareers();

    const storageCareers = JSON.parse(localStorage.getItem('dc-has-followed'));

    setFollowedCareers(storageCareers);
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
                {followedCareers.map((car) => {
                  const careerName = allCareers.filter((c) => c.id === car)[0].name;

                  return (
                    <CareerCard
                      key={car}
                      onClick={() => { history.push(`/profissao/${car}/`); }}
                      career={careerName}
                      score={2}
                    />
                  );
                })}
              </FollowedCareersContainer>
            </ContentContainer>
          </PageContainer>
        </RateProvider>
      </PageBackground>
    </>
  );
};

export { User };
