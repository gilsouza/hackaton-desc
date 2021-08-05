import styled from 'styled-components';

export const TabsContainer = styled.div`
    display: flex;
`;
export const Tab = styled.div`
  margin: 0 5px;
  font-size: 14px;
  color: ${(props) => (props.selected ? 'white' : 'gray')};
`;
