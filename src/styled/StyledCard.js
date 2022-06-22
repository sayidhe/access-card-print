import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 45em){
    width: 80%;
  }
`;

export const CardStyled = styled.div`
  background-color: ${props => props.colors.cardBackgroundColor};
  width: 5.4cm;
  height: 8.55cm;
  border: 1px solid #000;
  border-radius: 0.4cm;
  overflow: hidden;
`;

export const MainContentWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameWrapperStyled = styled.div`
  margin-bottom: 1.5rem;
`;

export const EnNameStyled = styled.div`
  font-size: 14pt;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  text-align: center;
`;

export const CnNameStyled= styled.div`
  font-size: 12pt;
  font-family: 'Pingfang SC', sans-serif;
  font-weight: 400;
  text-align: center;
  display: block;
`;

export const Center = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const A4WrapStyled = styled.div`
  width: 29.7cm;
  height: 21cm;
  display: block;
`;
