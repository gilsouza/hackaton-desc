import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const PageContainer = styled.div`
  max-width: 900px;
  width: 100%;
  border-radius: 15px;
  background-color: white;
`;

export const PageBackground = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  background-color: #e0e0e0;
  background-image: url("https://www.pngkey.com/png/full/180-1800744_diagonal-line-png.png");
`;
export const ContentContainer = styled.div`
  padding: 20px;
  flex: 1;
  background-color: var(--third-color);
  border-radius: 0 0 5px 5px;
`;
export const Container = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
    margin-top: 20px;
`;
export const TextArea = styled.textarea`
  margin-top: 20px;
  width: 400px;
  height: 400px;
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 16px;
  resize: none;
  outline: none;
  font-size: 16px;
`;
export const ProfessionHeader = styled.div`
  background-color: var(--secondary-color);
  padding: 12px 20px 0 20px;
`;
export const CarrerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfessionText = styled.p`
  font-size: 32px;
  text-align: left;
  font-weight: bold;
  color: white;
`;

export const Row = styled.div`
    display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const AsyncSelectStyled = styled(AsyncSelect)`
  margin-top: 10px;
  margin-bottom: 20px;
  min-width: 400px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
  width: 90px;
  outline: none;
  background-color: white;
  border: none;
`;

export const FollowedCareersContainer = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const FollowedCareersTitle = styled.div`
  margin-top: 20px;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FlexContainer = styled.div`
    display: flex;
  flex-wrap: wrap;
`;

export const CareerName = styled.div`
  color: var(--primary-color-dark);
  font-size: 18px;
  margin-bottom: 8px;
  cursor: pointer;
`;
