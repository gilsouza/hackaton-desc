import { PageContainer, IconContainer } from './styles';

const Button = ({
  text, sufixIcon, style, onClick, disabled,
}) => (
  <PageContainer style={style} onClick={onClick} disabled={disabled}>
    {text}
    {sufixIcon && <IconContainer>{sufixIcon}</IconContainer>}
  </PageContainer>
);

export { Button };
