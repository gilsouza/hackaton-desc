import { useParams } from 'react-router-dom';
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
    path: 'avaliacao',
  },
];
const Profession = () => {
  const { profissao } = useParams();
  const { currentCarrer, getCarrerById } = useCareers();

  useEffect(() => {
    getCarrerById(profissao);
  }, []);

  return (
    <PageBackground>
      <PageContainer>
        <ProfessionHeader>
          <CarrerHeader>
            <ProfessionText>{currentCarrer.name}</ProfessionText>
            <Row>
              <Button text="Seguir" sufixIcon={<Add />} />
              <Button style={{ marginLeft: 5 }} text="Avaliar" sufixIcon={<RateReview />} />
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
