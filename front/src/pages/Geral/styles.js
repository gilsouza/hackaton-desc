import styled from 'styled-components';

export const PageContainer = styled.div`
    text-align: left;
`;

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
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const TextResult = styled.span``;

export const LabelResult = styled(TextResult)`
    font-size: 12px;
    font-weight: 600;
`;
export const LabelResultGeral = styled(TextResult)`
    font-size: 16px;
    font-weight: 600;
`;
export const SectionTitle = styled.p`
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 12px;
    font-weight: 600;
`;
export const Salary = styled.div`
    font-size: ${(props) => (props.size === 'lg' ? 32 : 24)}px;
    font-weight: 600;
`;
export const SalaryContainer = styled.div`
    font-size: 24px;
    margin: 0 12px;
    margin-bottom: ${(props) => (props.size === 'lg' ? 32 : 24)}px;
    text-align: center;
`;

export const Section = styled.div`
    padding-bottom: 12px;
    padding-top: ${(props) => (props.withoutTopMargin ? 0 : '12px')};
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LabelRatingResult = styled(LabelResult)`
    font-size: 20px;
    color: var(--primary-color-dark);
`;

export const BoxRatings = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 12px 0;
`;

export const Rating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 8px;
    margin-bottom: 8px;
`;
