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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
    font-size: 20px;
`;

export const TextResult = styled.span`
    margin-right: 10px;
`;

export const LabelResult = styled(TextResult)`
    margin-right: 10px;
    font-size: 20px;
`;

export const LabelRatingResult = styled(LabelResult)`
    margin-right: 10px;
    font-size: 20px;
    color: var(--primary-color-dark);
    font: 500;
`;

export const BoxRatings = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;

export const Rating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
