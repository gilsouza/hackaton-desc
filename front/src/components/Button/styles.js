import styled from 'styled-components';

export const PageContainer = styled.button`
  background-color: var(--primary-color);
  border-radius: 40px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.5s;

  :hover {
    background-color: var(--primary-color-dark);
  }

  :active {
    background-color: #10F89F;
    background-size: 100%;
    transition: background 0s;
  }
`;

export const IconContainer = styled.div`
  margin-left: 5px;
  display: flex;
`;
