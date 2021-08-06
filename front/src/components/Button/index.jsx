import { PageContainer, IconContainer } from './styles';

const Button = ({
  text, sufixIcon, style, onClick,
}) => (
  <PageContainer style={style} onClick={onClick}>
    {text}
    {sufixIcon && <IconContainer>{sufixIcon}</IconContainer>}
  </PageContainer>
);

export { Button };
