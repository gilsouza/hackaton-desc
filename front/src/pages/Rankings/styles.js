import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 900px;
  width: 100%;
  border-radius: 15px;
  background-color: white;
`;

export const RakingHeader = styled.div`
  background-color: var(--secondary-color);
  padding: 12px 20px 0 20px;
  height: 100px;
`;
export const ContentContainer = styled.div`
  padding: 20px;
  flex: 1;
  background-color: var(--third-color);
  border-radius: 0 0 5px 5px;
  text-align: left;
`;
export const Row = styled.div`
    display: flex;
`;
export const Title = styled.div`
    margin-bottom: 12px;
  font-size: 24px;
  font-weight: 800;
`;

export const HeaderText = styled.p`
  font-size: 32px;
  text-align: left;
  font-weight: bold;
  color: white;
`;
