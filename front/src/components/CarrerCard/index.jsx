import { Star } from '@material-ui/icons';
import { Score, Title, Card } from './styles';

const CareerCard = ({ career, score, onClick }) => (
  <Card onClick={onClick}>
    <Title>{career}</Title>
    {score !== null && (
    <Score>
      {score}
      <Star />
    </Score>
    )}
  </Card>
);

export { CareerCard };
