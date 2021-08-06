import { useEffect } from 'react';
import { ThumbDown, ThumbUp } from '@material-ui/icons';
import {
  LikeContainer,
  Name, PageContainer, Quote, Role, Score, UserContainer,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { Avatar, Card } from '../../styles/global-components';

const Depoimentos = () => {
  const { getBriefs, briefs, currentCareer } = useCareers();
  useEffect(() => {
    getBriefs();
  }, [currentCareer]);

  return (
    <PageContainer>
      {briefs.map((brief, index) => {
        const score = brief.likes.filter((l) => l.like).length + 1;
        return (
          <Card style={{ marginBottom: index < briefs.length ? '16px' : 0 }}>
            <Quote>{brief.text}</Quote>
            <UserContainer>
              <Avatar src={brief.user.avatar} />
              <Name>{brief.user.name}</Name>
              <Role>{brief.user.role}</Role>
            </UserContainer>
            <LikeContainer>
              <ThumbDown style={{ color: '#9d0000' }} />
              <Score>{score ? (Math.sign(score) ? '+' : '-') + score : 0}</Score>
              <ThumbUp style={{ color: '#006b00' }} />
            </LikeContainer>
          </Card>
        );
      })}
    </PageContainer>
  );
};

export { Depoimentos };
