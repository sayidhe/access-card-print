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
  border: 1px solid #f5f5f5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  // background-color: transparent;
  // background-image: url(${props => props.image_src});
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
`;
