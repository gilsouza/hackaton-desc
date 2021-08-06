import styled from 'styled-components';

export const PageContainer = styled.div``;

export const TotalResult = styled.div`
    font-weight: 400;
    display: flex;
    align-items: flex-start;
    height: 20px;
    width: 100%;
`;

export const GeneralResults = styled.div`
  flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const TextResult = styled.span`
`;

export const LabelResult = styled(TextResult)`
    font-size: 24px;
    font-weight: 600;
`;

export const LabelRatingResult = styled(LabelResult)`
    font-size: 20px;
    color: var(--primary-color-dark);
`;

export const BoxRatings = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
    flex-direction: column;
`;

export const Rating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  flex-direction: column;
  margin-bottom: 12px;
`;
