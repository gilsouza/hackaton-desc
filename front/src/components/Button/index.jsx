import { PageContainer, IconContainer } from './styles';

const Button = ({ text, sufixIcon, style }) => (
  <PageContainer style={style}>
    {text}
    <IconContainer>{sufixIcon}</IconContainer>
  </PageContainer>
);

export { Button };
