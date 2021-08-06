import { PageContainer, IconContainer } from './styles';

const Button = ({
  text, sufixIcon, prefixIcon, style, onClick, disabled, selected,
}) => (
  <PageContainer style={style} onClick={onClick} disabled={disabled} selected={selected}>
    {prefixIcon && <IconContainer>{prefixIcon}</IconContainer>}
    {text}
    {sufixIcon && <IconContainer>{sufixIcon}</IconContainer>}
  </PageContainer>
);

export { Button };
