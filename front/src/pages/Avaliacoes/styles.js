import styled from 'styled-components';

export const PageContainer = styled.div``;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    border: solid 1px var(--box-border-color);
    margin-bottom: 20px;
    justify-content: center;
`;

export const RatingsContainer = styled.div`
    padding: 14px;
    padding-top: 40px;
    border-width: 1px;
    border-color: var(--background-color);
`;

export const TotalResult = styled.div`
    font-weight: 400;
    display: flex;
    align-items: flex-start;
    height: 20px;
    width: 100%;
`;

export const TextResult = styled.span`
    margin-right: 10px;
`;

export const LabelResult = styled(TextResult)`
    font-size: 12px;
    font-weight: 600;
`;

export const LabelRatingResult = styled(LabelResult)`
    font-size: 20px;
    color: var(--primary-color-dark);
`;

export const BoxRatings = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 8px;
`;

export const Rating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 8px;
`;

export const UserRow = styled.div`
    position: relative;
    top: 45px;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 20px;
    width: 220px;
`;

export const UserName = styled.span`
    margin-left: 15px;
`;

export const RatingsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
