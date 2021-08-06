import {
  StepsContainer, Step, Line, StepsAbsolute,
} from './styles';

const Steps = ({ steps, selectedIndex, onClick }) => (
  <StepsContainer>
    <Line />
    <StepsAbsolute>
      {steps.map((step, index) => (
        <Step
          onClick={() => onClick(index)}
          selected={selectedIndex === index}
        >
          {index}
        </Step>
      ))}
    </StepsAbsolute>
  </StepsContainer>
);

export { Steps };
