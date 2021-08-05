import { useEffect } from 'react';
import { useCareers } from '../../hooks/Careers';
import {
  PageContainer,
  HorizontalLine,
  QuestionListItemContainer,
  QuestionListItemText,
  QuestionListItemTitle,
  QuestionListItemUsername,
} from './styles';

const Duvidas = () => {
  const { getQuestions, questions } = useCareers();
  useEffect(() => {
    getQuestions();
  }, []);

  const renderQuestionList = () => {
    if (!questions.length) { return <div>Essa carreira ainda não tem perguntas!</div>; }

    return questions.map((question, index) => (
      <div key={question.id} style={{ width: '100%' }}>
        <QuestionListItemContainer key={question.id}>
          <QuestionListItemTitle>
            {question.title}
          </QuestionListItemTitle>
          <QuestionListItemText>
            {question.text}
          </QuestionListItemText>
          <QuestionListItemUsername>
            Perguntado por
            {' '}
            {question.user.name}
          </QuestionListItemUsername>
        </QuestionListItemContainer>
        {index !== questions.length - 1 && <HorizontalLine />}
      </div>
    ));
  };

  return (
    <PageContainer>
      {renderQuestionList()}
    </PageContainer>
  );
};

export { Duvidas };
