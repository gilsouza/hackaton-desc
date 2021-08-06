import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { Avatar, Card } from '../../styles/global-components';
import {
  Button,
  LikeContainer, Name, Quote, Role, Score, UserContainer,
} from '../../pages/Depoimentos/styles';
import { useCareers } from '../../hooks/Careers';

const BriefCard = ({ brief, style }) => {
  const { sendRate } = useCareers();
  const sendBriefRate = (like) => {
    sendRate(brief.id, like);
  };
  return (
    <Card style={style}>
      <Quote>{brief.text}</Quote>
      <UserContainer>
        <Avatar src={brief.user.avatar} />
        <Name>{brief.user.name}</Name>
        <Role>{brief.user.role}</Role>
      </UserContainer>
      <LikeContainer>
        <Button onClick={() => sendBriefRate(false)}>
          <KeyboardArrowDown />
        </Button>
        <Score>{brief.score ? (Math.sign(brief.score) > 0 ? '+' : '-') + Math.abs(brief.score) : 0}</Score>
        <Button onClick={() => sendBriefRate(true)}>
          <KeyboardArrowUp />
        </Button>
      </LikeContainer>
    </Card>
  );
};

export { BriefCard };
