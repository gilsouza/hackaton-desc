import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  background-color: var(--secondary-color);
  padding: 20px;
`;
export const AbsoluteWithAnimation = styled.div`
  position: absolute;
  left: ${(props) => (props.careerSelected ? 'calc(50vw - 400px)' : 'calc(50% - 200px)')};
  top: ${(props) => (props.careerSelected ? '10px' : 'calc(50% - 200px)')};
  transition: left 2s, top 2s;
`;

export const SearchInput = styled.input`
  display: flex;
  flex: 1;
  border: none;
  font-size: 16px;
  background-color: transparent;
  color: white;
  outline: none;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 18px;
  border: 2px solid #ccc;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
  margin-top: 40px;
  height: 36px;
  width: 800px;
  margin-bottom: 24px;
  color: white;
`;

export const AsyncSelectStyled = styled(AsyncSelect)`
  width: 800px;
  background-color: transparent;
`;

export const CareerCardText = styled.div`
  font-size: 24px;
  color: var(--secondary-color);
`;
