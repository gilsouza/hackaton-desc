import {
  HeaderContainer, HeaderText, LeftContainer, LoginButton,
} from './styles';
import logo from '../../assets/logo.png';

const Header = () => (
  <HeaderContainer>
    <LeftContainer>
      <img src={logo} alt="logo" />
      <HeaderText>Carreiras</HeaderText>
    </LeftContainer>
    <LoginButton>Entrar</LoginButton>
  </HeaderContainer>
);

export { Header };
