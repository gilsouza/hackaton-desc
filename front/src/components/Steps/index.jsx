import {
  Line, LineProgress, Step, StepsAbsolute, StepsContainer,
} from './styles';

const Steps = ({ steps, selectedIndex }) => (
  <StepsContainer>
    <Line>
      <LineProgress width={selectedIndex * (100 / 2)} />
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
