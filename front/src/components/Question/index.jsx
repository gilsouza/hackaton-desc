import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import axios from 'axios';
import { useState } from 'react';
import {
  AnswerContainer,
  AnswerQuestionContainer,
  AnswersTitle,
  AnswerText,
  AnswerUsername,
  BackButton,
  HorizontalContainer,
  HorizontalLine,
  QuestionText,
  QuestionTitle,
  RightContainer,
  StyledTextArea,
  VotesContainer,
  VotesNumber,
} from '../../pages/Duvidas/styles';
import { Button } from '../Button';

const Question = ({
  onClick, currentAnswers, selectedQuestion, onUpdate,
}) => {
  const [answerQuestionText, setAnswerQuestionText] = useState('');

  const handleUpArrowClick = async (id) => {
    await axios.post(`https://hackaton-desc.herokuapp.com/question_answers/${id}/upvote`);

    const { data } = await axios.get(`https://hackaton-desc.herokuapp.com/question_answers?_expand=user&questionId=${selectedQuestion.id}`);

    onUpdate(data);
  };

  const handleDownArrowClick = async (id) => {
    await axios.post(`https://hackaton-desc.herokuapp.com/question_answers/${id}/downvote`);

    const { data } = await axios.get(`https://hackaton-desc.herokuapp.com/question_answers?_expand=user&questionId=${selectedQuestion.id}`);

    onUpdate(data);
  };

  const handleAnswerQuestion = async () => {
    const { data } = await axios.post('https://hackaton-desc.herokuapp.com/question_answers', {
      userId: 1,
      questionId: selectedQuestion.id,
      text: answerQuestionText,
      upvotes: 0,
      downvotes: 0,
    });

    const { data: userData } = await axios.get('https://hackaton-desc.herokuapp.com/users?id=1');

    onUpdate((prev) => [...prev, { ...data, user: userData[0] }]);
  };

  return (
    <>
      <HorizontalContainer>
        <BackButton onClick={onClick}>
          <ChevronLeftIcon />
          {' '}
          Voltar
        </BackButton>
      </HorizontalContainer>
      <HorizontalLine />
      <QuestionTitle>{selectedQuestion.title}</QuestionTitle>
      <QuestionText>{selectedQuestion.text}</QuestionText>
      <AnswerQuestionContainer>
        <StyledTextArea onChange={(e) => setAnswerQuestionText(e.target.value)} />
        <Button text="Responder Pergunta" onClick={handleAnswerQuestion} />
      </AnswerQuestionContainer>
      <HorizontalLine />
      <AnswersTitle>Principais respostas:</AnswersTitle>
      {currentAnswers.length > 0 ? currentAnswers
        .sort((q1, q2) => (q1.upvotes - q1.downvotes < q2.upvotes - q2.downvotes ? 1 : -1))
        .map((answer) => (
          <AnswerContainer key={answer.id}>
            <VotesContainer>
              <KeyboardArrowUpIcon onClick={() => handleUpArrowClick(answer.id)} />
              <VotesNumber>{answer.upvotes - answer.downvotes}</VotesNumber>
              <KeyboardArrowDownIcon onClick={() => handleDownArrowClick(answer.id)} />
            </VotesContainer>
            <RightContainer>
              <AnswerText>{answer.text}</AnswerText>
              <AnswerUsername>
                Respondido por
                {` ${answer.user && answer.user.name}`}
              </AnswerUsername>
            </RightContainer>
          </AnswerContainer>
        )) : <div style={{ marginLeft: 30 }}>Nenhuma resposta encontrada</div>}
    </>
  );
};

export { Question };
