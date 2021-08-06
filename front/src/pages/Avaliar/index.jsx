import {
  PageContainer, PageBackground, ProfessionHeader, CarrerHeader, ProfessionText,
} from './styles';
import { useCareers } from '../../hooks/Careers';

const Avaliar = () => {
  const { currentCarrer } = useCareers();
  return (
    <PageBackground>
      <PageContainer>
        <ProfessionHeader>
          <CarrerHeader>
            <ProfessionText>

              {`Avaliar - ${currentCarrer.name}`}
            </ProfessionText>
          </CarrerHeader>
        </ProfessionHeader>
      </PageContainer>
    </PageBackground>
  );
};

export { Avaliar };
