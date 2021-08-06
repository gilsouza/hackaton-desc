import { PageContainer, IconContainer } from './styles';

const Button = ({
  text, sufixIcon, style, onClick, disabled, selected,
}) => (
  <PageContainer style={style} onClick={onClick} disabled={disabled} selected={selected}>
    {text}
    {sufixIcon && <IconContainer>{sufixIcon}</IconContainer>}
  </PageContainer>
);

export { Button };
