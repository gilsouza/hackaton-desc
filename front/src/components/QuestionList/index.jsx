import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  HorizontalLine,
  QuestionListItemContainer,
  QuestionListItemLeft,
  QuestionListItemRight,
  QuestionListItemText,
  QuestionListItemTitle,
  QuestionListItemUsername,
} from '../../pages/Duvidas/styles';

const QuestionList = ({ questions, handleClick, maxSize = questions.length }) => {
  if (!questions.length) {
    return <div>Essa carreira ainda não tem perguntas!</div>;
  }

  return questions.slice(0, maxSize)
    .sort((q1, q2) => (q1.createdAt < q2.createdAt ? 1 : -1)).map((question) => (
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

export { QuestionList };
