import styled from 'styled-components';

export const UserInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  gap: 1.5rem;
  width: 40%;
  padding: 2rem;

  #image {
    display: none;
  }

  @media screen and (max-width: 45em) {
    width: 100%;
    align-items: center;
    padding: 1rem;
    padding-bottom: 4rem;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  color: #212121;
  transition: color 0.3s ease-in-out;
  outline: none;
  border: 1px solid #212121;
  border-radius: 999px;
  padding: .8rem 1rem;
  font-size: 0.85rem;
  cursor: pointer;
  width: 80%;

  &:hover {
    color: #EB4847;
  }

  &.focus {
    border: 1px solid #EB4847;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  color: #212121;
  padding: 0.8rem 1rem;
  width: 80%;
  border-radius: 0;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #212121; 

  &:focus {
    border-color: #999;
  }
`;

export const Button = styled.button`
  background-color: #EB4847;
  color: #fff;
  padding: 0.7rem 2rem;
  width: fit-content;
  font-size: 1rem;
  outline: none;
  border: 1px solid transparent;
  border-radius: 4rem;
  margin-bottom: 2rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.3 : 1};

  .content{
    font-family: 'Manrope', sans-serif;
    position: relative;

    > i{
      margin-left: 0.5rem;
    }

    .warn{
      margin-top: 0.3rem;
      font-size: 0.6rem;
      font-style: italic;
      color: #EB4847;
      position: absolute;
      top: 2rem;
    }
  }

  > i{
    margin-left: 1rem;
  }
  .load{
    transform: rotate(0deg);
    animation: load 1s ease-out infinite both;
  }
  @keyframes load{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  &.for-mobile{
    display: none;
  }

  &:hover{
    background-color: ${props => !props.disabled && '#ffa665'};
    transition: background-color 0.3s ease-in;
  }

  @media screen and (max-width: 45em){
    &.for-mobile{
      display: block;
      margin-top: 2rem;

    }
    &.for-desktop{
      display: none;
    }
  }
`;

export const ThemesWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    gap: 1rem;
    font-size: 0.85rem;
    font-family: 'Manrope', sans-serif;
    background-color: #eee;
    padding: 0.7rem 1rem;
    border-radius: 0.4rem;

    @media screen and (max-width: 45em){
        justify-content: center;
        p{
            display: block;
            width: 100%;
            text-align: center;
        }
    }
    
    p{
        color: #6e6e6e;
        margin: 0;
    }
`;

export const SelectTheme = styled.div`
    height: 2rem;
    width: 2rem;
    border: 0.2rem solid transparent;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        box-shadow: 0 0 1rem 0rem #EB4847;
    }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 85%;
  gap: 1rem;
`;