import { Star } from '@material-ui/icons';
import { Card } from '../../styles/global-components';
import { Score, Title } from './styles';

const CareerCard = ({ career, score }) => (
  <Card>
    <Title>{career.name}</Title>
    <Score>
      {score}
      <Star />
    </Score>
  </Card>
);

export { CareerCard };
