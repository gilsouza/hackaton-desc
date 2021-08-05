import styled from 'styled-components';

export const TabsContainer = styled.div`
    display: flex;
  padding-bottom: 10px;
`;
export const Container = styled.div`
    position: relative;
`;
export const BottomBorder = styled.div`
  height: 5px;
  background-color: var(--primary-color);
  transition: 1s;
  position: absolute;
  bottom: 0;
  left: ${(props) => 5 + (props.index * 110)}px;
  width: 100px;
`;
export const Tab = styled.div`
  margin: 0 5px;
  font-size: 14px;
  cursor: pointer;
  width: 100px;
  color: ${(props) => (props.selected ? 'white' : 'gray')};
`;
