import styled from 'styled-components'

export const ImageWrapperStyled = styled.div`
  margin: 0.6cm 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ImageLayer = styled.div`
  height: 3.4cm;
  width: 3.4cm;
  border-radius: 50%;
  border: 1px solid #f5f5f5;
  background-color: transparent;
  background-image: url(${props => props.image_src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const StyledImage = styled.img`
    width: auto;
    height: 10rem;
    border: none;
`;
