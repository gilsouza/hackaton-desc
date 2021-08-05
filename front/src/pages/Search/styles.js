import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const SearchInput = styled.input`
  display: flex;
  flex: 1;
  border: none;
  font-size: 16px;
  outline: none;
  width: 100%;
`;

export const SearchFrom = styled.form`
  width: 90%;
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
  margin-bottom: 24px;
`;

export const NotFoundText = styled.div`
  margin-top: 52px;
  font-size: 24px;
  color: #aaa;
`;

export const CareerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 84px;
  width: 60%;
  padding: 12px;
  border-bottom: 1px solid #aaa;
  transition: background-color 0.3s;

  :hover {
    background-color: #efefef;
    cursor: pointer;
  }
`;

export const CareerCardText = styled.div`
  font-size: 24px;
  color: black;
`;
