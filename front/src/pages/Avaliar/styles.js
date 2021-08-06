import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const PageContainer = styled.div`
    max-width: 800px;
  width: 100%;
`;

export const PageBackground = styled.div`
  padding: 20px;
  flex: 1;
  justify-content: center;
  display: flex;
  background-color: var(--background-color);
`;
export const ContentContainer = styled.div`
  padding: 20px;
  flex: 1;
  background-color: var(--third-color);
  border-radius: 0 0 5px 5px;
  border: 1px solid black;
`;
export const Container = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
    margin-top: 20px;
`;
export const ProfessionHeader = styled.div`
  background-color: black;
  padding: 12px 20px 0 20px;
  border-radius: 5px 5px 0 0 ;
`;
export const CarrerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfessionText = styled.p`
  font-size: 32px;
  text-align: left;
  font-weight: bold;
  color: white;
`;

export const Row = styled.div`
    display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const AsyncSelectStyled = styled(AsyncSelect)`
  margin-top: 10px;
  margin-bottom: 20px;
  min-width: 400px;
`;
