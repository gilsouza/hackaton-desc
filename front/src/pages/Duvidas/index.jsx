import { useEffect, useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import Modal from 'react-modal';
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
  AnswerContainer,
  RightContainer,
  VotesContainer,
  VotesNumber,
  AnswerQuestionContainer,
  StyledTextArea,
  ModalContainer,
  ModalHeader,
  ModalText,
  ModalTextArea,
  ModalTitle,
  ModalTitleInput,
} from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Duvidas = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const { getQuestions, questions } = useCareers();

  useEffect(() => {
    getQuestions();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = async (questionId) => {
    setCurrentQuestionId(questionId);

    const [question] = questions.filter((q) => q.id === questionId);

    setSelectedQuestion(question);

    const { data } = await axios.get(`https://hackaton-desc-back.vercel.app/question_answers?_expand=user&questionId=${questionId}`);

    setCurrentAnswers(data);
  };

  const handleUpArrowClick = async (id) => {
    await axios.post(`https://hackaton-desc-back.vercel.app/question_answers/${id}/upvote`);

    const { data } = await axios.get(`https://hackaton-desc-back.vercel.app/question_answers?_expand=user&questionId=${id}`);

    setCurrentAnswers(data);
  };

  const handleDownArrowClick = async (id) => {
    await axios.post(`https://hackaton-desc-back.vercel.app/question_answers/${id}/downvote`);

    const { data } = await axios.get(`https://hackaton-desc-back.vercel.app/question_answers?_expand=user&questionId=${id}`);

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
      </HorizontalContainer>
      <HorizontalLine />
      <QuestionTitle>{selectedQuestion.title}</QuestionTitle>
      <QuestionText>{selectedQuestion.text}</QuestionText>
      <AnswerQuestionContainer>
        <StyledTextArea />
        <Button text="Responder Pergunta" />
      </AnswerQuestionContainer>
      <HorizontalLine />
      <AnswersTitle>Principais respostas:</AnswersTitle>
      {currentAnswers.length > 0 ? currentAnswers.map((answer) => (
        <AnswerContainer key={answer.id}>
          <VotesContainer>
            <KeyboardArrowUpIcon onClick={handleUpArrowClick} />
            <VotesNumber>{answer.upvotes - answer.downvotes}</VotesNumber>
            <KeyboardArrowDownIcon onClick={handleDownArrowClick} />
          </VotesContainer>
          <RightContainer>
            <AnswerText>{answer.text}</AnswerText>
            <AnswerUsername>
              Respondido por
              {` ${answer.user.name}`}
            </AnswerUsername>
          </RightContainer>
        </AnswerContainer>
      )) : <div style={{ marginLeft: 30 }}>Nenhuma resposta encontrada</div>}
    </>
  );

  const renderQuestionList = () => {
    if (!questions.length) { return <div>Essa carreira ainda não tem perguntas!</div>; }

    return questions.map((question) => (
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
        <HorizontalLine />
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
            <Button text="Fazer Pergunta" onClick={openModal} />
          </HeaderHorizontalContainer>
          <HorizontalLine />
          {renderQuestionList()}
        </>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Fazer Pergunta"
      >
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Faça uma pergunta</ModalTitle>
            <CloseIcon onClick={closeModal} />
          </ModalHeader>
          <ModalText>Escolha um título:</ModalText>
          <ModalTitleInput placeholder="título" />
          <ModalText>Elabore sua pergunta:</ModalText>
          <ModalTextArea />
          <Button text="Enviar" style={{ alignSelf: 'center', width: 80 }} />
        </ModalContainer>
      </Modal>
    </PageContainer>
  );
};

export { Duvidas };
