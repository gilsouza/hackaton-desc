import {
  StepsContainer, Step, Line, StepsAbsolute, LineProgress,
} from './styles';

const Steps = ({ steps, selectedIndex }) => (
  <StepsContainer>
    <Line>

      <LineProgress width={selectedIndex * (100 / 3)} />
    </Line>
    <StepsAbsolute>
      {steps.map((step, index) => (
        <Step
          selected={selectedIndex >= index}
        >
          {index + 1}
        </Step>
      ))}
    </StepsAbsolute>
  </StepsContainer>
);

export { Steps };
