import styled from 'styled-components';

export const PageContainer = styled.div`
    max-width: 900px;
  width: 100%;
  border-radius: 15px;
  background-color: white;
`;

export const PageBackground = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  background-color: #e0e0e0;
  background-image: url("https://www.pngkey.com/png/full/180-1800744_diagonal-line-png.png");
`;

export const ContentContainer = styled.div`
  padding: 20px;
  flex: 1;
  background-color: var(--third-color);
  border-radius: 0 0 5px 5px;
`;
export const ProfessionHeader = styled.div`
  background-color: var(--secondary-color);  
  padding: 12px 20px 0 20px;
`;
export const CarrerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const ProfessionText = styled.p`
  font-size: 32px;
  text-align: left;
  font-weight: bold;
  color: white;
`;

export const ButtonLogo = styled.div`
    margin-left: 12px;
  cursor: pointer;
`;

export const Row = styled.div`
    display: flex;
  align-items: center;
`;
