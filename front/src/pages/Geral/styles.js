import styled from 'styled-components';

export const PageContainer = styled.div`
text-align: left`;

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

export const TextResult = styled.span`
`;

export const LabelResult = styled(TextResult)`
    font-size: 12px;
    font-weight: 600;
`;
export const LabelResultGeral = styled(TextResult)`
    font-size: 16px;
    font-weight: 600;
`;
export const SectionTitle = styled.p`
    font-size: 24px;
  margin-top: 0px;
  margin-bottom: 12px;
    font-weight: 600;
`;

export const Section = styled.div`
  padding-bottom: 12px;
  padding-top: ${(props) => (props.withoutTopMargin ? 0 : '12px')}
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
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 8px;
  margin-bottom: 8px;
`;
