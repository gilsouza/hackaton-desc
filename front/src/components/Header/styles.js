import styled from 'styled-components';

export const Img = styled.img`
  margin-right: 5px;
  transition: height 2s, width 2s;
`;
export const HeaderContainer = styled.div`
  height: 60px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
`;
export const HeaderBackground = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
`;

export const HeaderText = styled.h1`
  color: var(--primary-color);
  font-size: ${(props) => (props.size === 'lg' ? 54 : 26)}px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: ${(props) => (props.size === 'lg' ? 44 : 22)}px;
`;

export const Name = styled.h1`
  color: var(--third-color);
  font-size: 20px;
  margin-right: 10px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 22px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.button`
  margin-right: 30px;
  border: 2px solid var(--secondary-color);
  border-radius: 20px;
  height: 40px;
  font-size: 20px;
  background-color: white;
  padding: 0 16px;
`;
