import { Star } from '@material-ui/icons';
import { Score, Title, Card } from './styles';

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
