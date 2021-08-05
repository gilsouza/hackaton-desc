import styled from 'styled-components';

export const TabsContainer = styled.div`
    display: flex;
`;
export const BottomBorder = styled.div`
    height: 5px;
    background-color: var(--primary-color);
  width: 100px;
`;
export const Tab = styled.div`
  margin: 0 5px;
  font-size: 14px;
  cursor: pointer;
  width: 100px;
  color: ${(props) => (props.selected ? 'white' : 'gray')};
`;
