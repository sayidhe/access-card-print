import styled from 'styled-components'

export const LogoStyled = styled.div`
  padding: 0.6cm 0 0 0.6cm;
  img {
    width: .6cm;
  }
`;

export const LogoWordmarkStyled = styled.div`
  svg {
    width: .6cm;
    g {
      fill: ${props => props.colors.logoColor}
    }
  }
`;
