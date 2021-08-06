import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  PageContainer, PageBackground, ProfessionHeader,
  CarrerHeader, ProfessionText, ContentContainer,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { Steps } from '../../components/Steps';
import StepsNavigations from '../../navigations/StepsNavigation';

const Avaliar = () => {
  const { profissao } = useParams();
  const { currentCareer, getCareerById } = useCareers();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!currentCareer) {
      getCareerById(profissao, false);
    }
  }, [currentCareer]);

  return (
    <PageBackground>
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
            selectedIndex={selectedIndex}
            onClick={(index) => (index < selectedIndex ? setSelectedIndex(index) : null)}
          />
          <StepsNavigations />
        </ContentContainer>
      </PageContainer>
    </PageBackground>
  );
};

export { Avaliar };
