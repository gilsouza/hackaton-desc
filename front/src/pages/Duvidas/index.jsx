import { useEffect, useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import axios from 'axios';
import { useCareers } from '../../hooks/Careers';
import { Button } from '../../components/Button';
import {
  PageContainer,
  HorizontalLine,
  QuestionListItemContainer,
  QuestionListItemText,
  QuestionListItemTitle,
  QuestionListItemUsername,
  QuestionListItemLeft,
  QuestionListItemRight,
  BackButton,
  HorizontalContainer,
  QuestionTitle,
  QuestionText,
  AnswersTitle,
  AnswerText,
  AnswerUsername,
  HeaderHorizontalContainer,
} from './styles';

const Duvidas = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});

  const { getQuestions, questions } = useCareers();

  useEffect(() => {
    getQuestions();
  }, []);

  const handleClick = async (questionId) => {
    setCurrentQuestionId(questionId);

    const [question] = questions.filter((q) => q.id === questionId);

    setSelectedQuestion(question);

    const { data } = await axios.get(`https://hackaton-desc-back.vercel.app/questions/${questionId}/question_anwsers?_expand=user`);

    setCurrentAnswers(data);
  };

  const renderQuestion = () => (
    <>
      <HorizontalContainer>
        <BackButton onClick={() => setCurrentQuestionId(0)}>
          <ChevronLeftIcon />
          {' '}
          Voltar
        </BackButton>
        <Button text="Responder Pergunta" />
      </HorizontalContainer>
      <HorizontalLine />
      <QuestionTitle>{selectedQuestion.title}</QuestionTitle>
      <QuestionText>{selectedQuestion.text}</QuestionText>
      <HorizontalLine />
      <AnswersTitle>Principais respostas:</AnswersTitle>
      {currentAnswers.length > 0 ? currentAnswers.map((answer) => (
        <>
          <AnswerText>{answer.text}</AnswerText>
          <AnswerUsername>
            Respondido por
            {` ${answer.user.name}`}
          </AnswerUsername>
        </>
      )) : <div style={{ marginLeft: 30 }}>Nenhuma resposta encontrada</div>}
    </>
  );

  const renderQuestionList = () => {
    if (!questions.length) { return <div>Essa carreira ainda não tem perguntas!</div>; }

    return questions.map((question, index) => (
      <div key={question.id} style={{ width: '100%' }}>
        <QuestionListItemContainer key={question.id} onClick={() => { handleClick(question.id); }}>
          <QuestionListItemLeft>
            <QuestionListItemTitle>
              {question.title}
            </QuestionListItemTitle>
            <QuestionListItemText>
              {question.text.length > 120 ? `${question.text.slice(0, 120)}...` : question.text}
            </QuestionListItemText>
            <QuestionListItemUsername>
              Perguntado por
              {' '}
              {question.user.name}
            </QuestionListItemUsername>
          </QuestionListItemLeft>
          <QuestionListItemRight>
            <ChevronRightIcon />
          </QuestionListItemRight>
        </QuestionListItemContainer>
        {index !== questions.length - 1 && <HorizontalLine />}
      </div>
    ));
  };

  return (
    <PageContainer>
      {currentQuestionId ? renderQuestion() : (
        <>
          {' '}
          <HeaderHorizontalContainer>
            <div>
              {questions.length}
              {' '}
              dúvidas encontradas.
            </div>
            <Button text="Fazer Pergunta" />
          </HeaderHorizontalContainer>
          <HorizontalLine />
          {renderQuestionList()}
        </>
      )}
    </PageContainer>
  );
};

export { Duvidas };
