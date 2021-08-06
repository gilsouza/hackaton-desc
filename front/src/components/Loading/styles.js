import styled from 'styled-components';

export const PageContainer = styled.div`
  z-index: 2;
  position: absolute;
  height: 80vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const BackgroundLoading = styled.div`
  z-index: 1;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: gray;
  opacity: 0.5;
`;
