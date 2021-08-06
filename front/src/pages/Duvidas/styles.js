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
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  :hover {
    background-color: #efefef;
    cursor: pointer;
  }
`;

export const QuestionListItemLeft = styled.div`
  display: flex;
  flex: 0.8;
  flex-direction: column;
  align-items: flex-start;
`;

export const QuestionListItemRight = styled.div`
  display: flex;
  flex: 0.2;
  flex-direction: column;
  align-items: flex-end;
`;

export const QuestionListItemTitle = styled.div`
  font-size: 20px;
  color: #222;
  margin-bottom: 10px;
  text-align: left;
`;

export const QuestionListItemText = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
  text-align: left;
`;

export const QuestionListItemUsername = styled.div`
  font-size: 10px;
  color: #777;
  margin-bottom: 10px;
`;

export const SeeMoreButton = styled.button`
  border: none;
  border-radius: 18px;
  height: 36px;
  width: 72px;
  cursor: pointer;
  background-color: var(--primary-color);
  box-shadow: 0 0 4px #999;
  outline: none;
  background-position: center;
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

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
  width: 90px;
  outline: none;
  background-color: white;
  border: none;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

export const QuestionTitle = styled.div`
  font-size: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
  margin-top: 30px;
  color: #333;
`;

export const QuestionText = styled.div`
  margin-left: 30px;
  text-align: left;
  margin-bottom: 30px;
`;

export const AnswersTitle = styled.div`
  font-size: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
  color: #333;
  margin-top: 20px;
`;

export const AnswerText = styled.div`
  margin-left: 30px;
  text-align: left;
  margin-bottom: 10px;
`;

export const AnswerUsername = styled.div`
  font-size: 10px;
  color: #777;
  margin-bottom: 10px;
  margin-left: 30px;
`;

export const HeaderHorizontalContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;
