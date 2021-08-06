import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  PageContainer, PageBackground, ProfessionHeader,
  CarrerHeader, ProfessionText, ContentContainer,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { Steps } from '../../components/Steps';
import StepsNavigations from '../../navigations/StepsNavigation';
import { RateProvider } from '../../hooks/Rate';

const Avaliar = () => {
  const { profissao, step } = useParams();
  const { currentCareer, getCareerById } = useCareers();
  console.log('step', step);

  useEffect(() => {
    if (!currentCareer) {
      getCareerById(profissao, false);
    }
  }, [currentCareer]);

  return (
    <PageBackground>
      <RateProvider>
        <PageContainer>
          <ProfessionHeader>
            <CarrerHeader>
              <ProfessionText>
                {`Avaliar - ${currentCareer?.name}`}
              </ProfessionText>
            </CarrerHeader>
          </ProfessionHeader>
          <ContentContainer>
            <Steps
              steps={new Array(3).fill()}
              selectedIndex={parseFloat(step) - 1}
            />
            <StepsNavigations />
          </ContentContainer>
        </PageContainer>
      </RateProvider>
    </PageBackground>
  );
};

export { Avaliar };
