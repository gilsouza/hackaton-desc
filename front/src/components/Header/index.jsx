import {
  HeaderContainer, HeaderText, Img, LeftContainer, LoginButton,
} from './styles';
import logo from '../../assets/logo.svg';

const Header = () => (
  <HeaderContainer>
    <LeftContainer onClick={() => window.location.replace('/')}>
      <Img src={logo} alt="logo" height={50} />
      <HeaderText>
        <span>descomplica</span>
        <span>carreiras</span>
      </HeaderText>
    </LeftContainer>
    <LoginButton>Entrar</LoginButton>
  </HeaderContainer>
);

export { Header };
