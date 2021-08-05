import { useEffect } from 'react';
import {
  Name, PageContainer, Quote, Role, UserContainer,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { Avatar, Card } from '../../styles/global-components';

const Depoimentos = () => {
  const { getBriefs, briefs } = useCareers();
  useEffect(() => {
    getBriefs();
  }, []);

  return (
    <PageContainer>
      {briefs.map((brief, index) => (
        <Card style={{ marginBottom: index < briefs.length ? '16px' : 0 }}>
          <Quote>{brief.text}</Quote>
          <UserContainer>
            <Avatar src={brief.user.avatar} />
            <Name>{brief.user.name}</Name>
            <Role>{brief.user.role}</Role>
          </UserContainer>
        </Card>
      ))}
    </PageContainer>
  );
};

export { Depoimentos };
