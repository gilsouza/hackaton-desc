import { useParams } from 'react-router-dom';
import { Add, RateReview } from '@material-ui/icons';
import {
  CarrerHeader,
  PageContainer, ProfessionHeader, ProfessionText, Row,
} from './styles';
import ProfissionNavigation from '../../navigations/ProfissionNavigation';
import { Tabs } from '../../components/Tabs';
import { Button } from '../../components/Button';

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
    path: 'salarios',
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
  return (
    <PageContainer>
      <ProfessionHeader>
        <CarrerHeader>
          <ProfessionText>{profissao}</ProfessionText>
          <Row>
            <Button text="Seguir" sufixIcon={<Add />} />
            <Button style={{ marginLeft: 5 }} text="Avaliar" sufixIcon={<RateReview />} />
          </Row>
        </CarrerHeader>
        <Tabs tabs={tabs} />
      </ProfessionHeader>
      <ProfissionNavigation />
    </PageContainer>
  );
};

export { Profession };
