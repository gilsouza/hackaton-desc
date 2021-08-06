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
  AnswerContainer,
  AnswerQuestionContainer,
  AnswersTitle,
  AnswerText,
  AnswerUsername,
  BackButton,
  HeaderHorizontalContainer,
  HorizontalContainer,
  HorizontalLine,
  ModalContainer,
  ModalHeader,
  ModalText,
  ModalTextArea,
  ModalTitle,
  ModalTitleInput,
  PageContainer,
  QuestionListItemContainer,
  QuestionListItemLeft,
  QuestionListItemRight,
  QuestionListItemText,
  QuestionListItemTitle,
  QuestionListItemUsername,
  QuestionText,
  QuestionTitle,
  RightContainer,
  StyledTextArea,
  VotesContainer,
  VotesNumber,
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

  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [newQuestionContent, setNewQuestionContent] = useState('');

  const [answerQuestionText, setAnswerQuestionText] = useState('');

  const { getQuestions, questions, currentCareer } = useCareers();

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

    const { data } = await axios.get(`https://hackaton-desc.herokuapp.com/question_answers?_expand=user&questionId=${questionId}`);

    setCurrentAnswers(data.sort((q1, q2) => (q1.createdAt < q2.createdAt ? 1 : -1)));
  };

  const handleUpArrowClick = async (id) => {
    await axios.post(`https://hackaton-desc.herokuapp.com/question_answers/${id}/upvote`);

    const { data } = await axios.get(`https://hackaton-desc.herokuapp.com/question_answers?_expand=user&questionId=${id}`);

    setCurrentAnswers(data.sort((q1, q2) => (q1.createdAt < q2.createdAt ? 1 : -1)));
  };

  const handleDownArrowClick = async (id) => {
    await axios.post(`https://hackaton-desc.herokuapp.com/question_answers/${id}/downvote`);

    const { data } = await axios.get(`https://hackaton-desc.herokuapp.com/question_answers?_expand=user&questionId=${id}`);

    setCurrentAnswers(data.sort((q1, q2) => (q1.createdAt < q2.createdAt ? 1 : -1)));
  };

  const handleSendQuestion = async () => {
    const { data } = await axios.post('https://hackaton-desc.herokuapp.com/questions', {
      userId: 1,
      text: newQuestionContent,
      title: newQuestionTitle,
      careerId: currentCareer.id,
      upvotes: 0,
      downvotes: 0,
    });

    closeModal();

    setCurrentQuestionId(data.id);
    setSelectedQuestion(data);
    setCurrentAnswers([]);
    getQuestions();
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

    setCurrentAnswers((prev) => [...prev, { ...data, user: userData[0] }]
      .sort((q1, q2) => (q1.createdAt < q2.createdAt ? 1 : -1)));
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
        <StyledTextArea onChange={(e) => setAnswerQuestionText(e.target.value)} />
        <Button text="Responder Pergunta" onClick={handleAnswerQuestion} />
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
              {` ${answer.user && answer.user.name}`}
            </AnswerUsername>
          </RightContainer>
        </AnswerContainer>
      )) : <div style={{ marginLeft: 30 }}>Nenhuma resposta encontrada</div>}
    </>
  );

  const renderQuestionList = () => {
    if (!questions.length) {
      return <div>Essa carreira ainda não tem perguntas!</div>;
    }

    return questions.sort((q1, q2) => (q1.createdAt < q2.createdAt ? 1 : -1)).map((question) => (
      <div key={question.id} style={{ width: '100%' }}>
        <QuestionListItemContainer
          key={question.id}
          onClick={() => {
            handleClick(question.id);
          }}
        >
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
              {question.user && question.user.name}
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
          <ModalTitleInput placeholder="título" onChange={(e) => setNewQuestionTitle(e.target.value)} />
          <ModalText>Elabore sua pergunta:</ModalText>
          <ModalTextArea onChange={(e) => setNewQuestionContent(e.target.value)} />
          <Button text="Enviar" style={{ alignSelf: 'center', width: 80 }} onClick={handleSendQuestion} />
        </ModalContainer>
      </Modal>
    </PageContainer>
  );
};

export { Duvidas };
