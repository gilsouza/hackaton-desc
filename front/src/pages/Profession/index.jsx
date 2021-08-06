import { useHistory, useParams } from 'react-router-dom';
import { Add, RateReview } from '@material-ui/icons';
import { useEffect } from 'react';
import {
  CarrerHeader, ContentContainer, PageBackground,
  PageContainer, ProfessionHeader, ProfessionText, Row,
} from './styles';
import ProfissionNavigation from '../../navigations/ProfissionNavigation';
import { Tabs } from '../../components/Tabs';
import { Button } from '../../components/Button';
import { useCareers } from '../../hooks/Careers';

const tabs = [
  {
    name: 'Visão Geral',
    path: '',
  },
  {
    name: 'Duvidas',
    path: 'duvidas',
  },
  {
    name: 'Salários',
    path: 'salario',
  },
  {
    name: 'Depoimentos',
    path: 'depoimentos',
  },
  {
    name: 'Avaliações',
    path: 'avaliacoes',
  },
];
const Profession = () => {
  const { profissao } = useParams();
  const history = useHistory();
  const { currentCareer, getCareerById } = useCareers();

  useEffect(() => {
    getCareerById(profissao);
  }, []);

  return (
    <PageBackground>
      <PageContainer>
        <ProfessionHeader>
          <CarrerHeader>
            <ProfessionText>{currentCareer?.name}</ProfessionText>
            <Row>
              <Button text="Seguir" sufixIcon={<Add />} />
              <Button
                style={{ marginLeft: 5 }}
                text="Avaliar"
                sufixIcon={<RateReview />}
                onClick={() => {
                  history.push(`/avaliar/${profissao}/1`);
                }}
              />
            </Row>
          </CarrerHeader>
          <Tabs tabs={tabs} />
        </ProfessionHeader>
        <ContentContainer>
          <ProfissionNavigation />
        </ContentContainer>
      </PageContainer>
    </PageBackground>
  );
};

export { Profession };
