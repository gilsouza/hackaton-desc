import styled from 'styled-components';

export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
`;

export const StepsAbsolute = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

export const Line = styled.div`
  background-color: black;
  width: 100px;
  top: 20px;
  height: 10px;
  position: absolute;
`;

export const Step = styled.div`
border-radius: 50px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: ${(props) => (props.selected ? 'var(--primary-color)' : 'black')};
  color: ${(props) => (!props.selected ? 'var(--primary-color)' : 'white')};
`;
