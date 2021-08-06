import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 5px;
  border: 1px solid var(--secondary-color);
  background-color: var(--secondary-color);
  box-shadow: 2px 2px 5px #919191;
  padding: 16px;
  display: flex;
  color: white;
  flex-direction: column;
`;

export const Avatar = styled.img`
  border-radius: 60px;
  height: 60px;
  width: 60px;
`;

export const AvatarSmall = styled.img`
  border-radius: 60px;
  height: 30px;
  width: 30px;
`;
