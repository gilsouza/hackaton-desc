import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 60px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.h1`
  color: black;
  font-weight: 800;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.button`
  margin-right: 30px;
  border: 2px solid black;
  border-radius: 20px;
  height: 40px;
  font-size: 20px;
  background-color: white;
  padding: 0 16px;
`;