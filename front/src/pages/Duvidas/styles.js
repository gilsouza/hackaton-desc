import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bbb;
`;

export const QuestionListItemContainer = styled.div`
  margin-top: 10px;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const QuestionListItemTitle = styled.div`
  font-size: 20px;
  color: #222;
`;

export const QuestionListItemText = styled.div`
  font-size: 14px;
  color: #555;
`;

export const QuestionListItemUsername = styled.div`
  font-size: 10px;
  color: #777;
`;
