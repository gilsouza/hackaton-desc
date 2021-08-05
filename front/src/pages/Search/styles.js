import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const SearchInput = styled.input`
  border: none;
  font-size: 16px;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 18px;
  border: 2px solid #ccc;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
  margin-top: 40px;
  height: 36px;
  width: 800px;
`;
