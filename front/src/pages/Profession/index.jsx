import { useParams } from 'react-router-dom';
import { PageContainer, ProfessionHeader, ProfessionText } from './styles';
import ProfissionNavigation from '../../navigations/ProfissionNavigation';

const Profession = () => {
  const { profissao } = useParams();
  return (
    <PageContainer>
      <ProfessionHeader>
        <ProfessionText>{profissao}</ProfessionText>
      </ProfessionHeader>
      <ProfissionNavigation />
    </PageContainer>
  );
};

export { Profession };
