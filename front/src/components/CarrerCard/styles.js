import styled from 'styled-components';

export const Score = styled.div`
    display: flex;
    justify-content: center;
    color: var(--primary-color);
    align-items: center
`;

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
`;

export const Card = styled.div`
  border-radius: 5px;
  border: 1px solid var(--secondary-color);
  box-shadow: 2px 2px 5px #919191;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  min-width: 200px;
  text-align: center;
  margin: 10px;
  background-color: var(--secondary-color);
  flex-direction: column;
`;
