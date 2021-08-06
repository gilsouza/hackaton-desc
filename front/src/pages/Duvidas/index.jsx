import { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { useCareers } from '../../hooks/Careers';
import { Button } from '../../components/Button';
import {
  HeaderHorizontalContainer,
  HorizontalLine,
  ModalContainer,
  ModalHeader,
  ModalText,
  ModalTextArea,
  ModalTitle,
  ModalTitleInput,
  PageContainer,
} from './styles';
import { Question } from '../../components/Question';
import { QuestionList } from '../../components/QuestionList';

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
  const history = useHistory();
  const [currentQuestionId, setCurrentQuestionId] = useState(history.location.state || 0);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [newQuestionContent, setNewQuestionContent] = useState('');

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
    const [question] = questions.filter((q) => q.id === questionId);

    setSelectedQuestion(question);

    const { data } = await axios.get(`https://hackaton-desc.herokuapp.com/question_answers?_expand=user&questionId=${questionId}`);

    setCurrentAnswers(data);
  };

  useEffect(() => {
    if (currentQuestionId) {
      handleClick(currentQuestionId);
    }
  }, [currentQuestionId]);

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

  return (
    <PageContainer>
      {currentQuestionId
        ? (
          <Question
            onUpdate={setCurrentAnswers}
            onClick={() => setCurrentQuestionId(0)}
            currentAnswers={currentAnswers}
            selectedQuestion={selectedQuestion}
          />
        ) : (
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
            <QuestionList
              questions={questions}
              handleClick={(questionId) => setCurrentQuestionId(questionId)}
            />
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
