import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  height: 100%;
  width: 40%;
  position: sticky;
  top: 2rem;
  padding: 2rem 0 4rem 0;
  margin-bottom: 4rem;

  @media screen and (max-width: 45em){
    width: 80%;
    margin-bottom: 2rem;
  }
`;

export const CardStyled = styled.div`
  width: 5.4cm;
  height: 8.55cm;
  background-color: #fff;
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
`;
