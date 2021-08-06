import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CarrerHeader,
  ContentContainer,
  PageBackground,
  PageContainer,
  ProfessionHeader,
  ProfessionText,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { RateProvider } from '../../hooks/Rate';
import { Header } from '../../components/Header';

const Avaliar = () => {
  const { profissao } = useParams();
  const { currentCareer, getCareerById } = useCareers();

  useEffect(() => {
    if (!currentCareer) {
      getCareerById(profissao, false);
    }
  }, [currentCareer]);

  return (
    <>
      <Header />
      <PageBackground>
        <RateProvider>
          <PageContainer>
            <ProfessionHeader>
              <CarrerHeader>
                <ProfessionText>
                  BLABLA
                </ProfessionText>
              </CarrerHeader>
            </ProfessionHeader>
            <ContentContainer>
              <div>okokok</div>
            </ContentContainer>
          </PageContainer>
        </RateProvider>
      </PageBackground>
    </>
  );
};

export { Avaliar };
