import { ThumbDown, ThumbUp } from '@material-ui/icons';
import { Avatar, Card } from '../../styles/global-components';
import {
  LikeContainer, Name, Quote, Role, Score, UserContainer,
} from '../../pages/Depoimentos/styles';

const BriefCard = ({ brief, style }) => (
  <Card style={style}>
    <Quote>{brief.text}</Quote>
    <UserContainer>
      <Avatar src={brief.user.avatar} />
      <Name>{brief.user.name}</Name>
      <Role>{brief.user.role}</Role>
    </UserContainer>
    <LikeContainer>
      <ThumbDown style={{ color: '#9d0000' }} />
      <Score>{brief.score ? (Math.sign(brief.score) > 0 ? '+' : '-') + Math.abs(brief.score) : 0}</Score>
      <ThumbUp style={{ color: '#006b00' }} />
    </LikeContainer>
  </Card>
);

export { BriefCard };
