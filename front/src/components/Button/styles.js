import styled from 'styled-components';

const getBackgroundColor = (disabled, selected) => {
  if (disabled) {
    return 'gray';
  }
  return selected ? 'var(--primary-color-dark)' : 'var(--primary-color)';
};
export const PageContainer = styled.button`
  background-color: ${(props) => getBackgroundColor(props.disabled, props.selected)};
  border-radius: 40px;
  border: none;
  box-shadow: 0 0 4px #999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'block')};
  transition: background 0.5s;

  :hover {
    background-color: ${(props) => !props.disabled && 'var(--primary-color-dark)'};
  }

  :active {
    background-color: #10F89F;
    background-size: 100%;
    transition: background 0s;
  }
`;

export const IconContainer = styled.div`
  margin-left: 5px;
  display: flex;
`;
