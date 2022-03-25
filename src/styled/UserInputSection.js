import styled from 'styled-components';

export const UserInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  gap: 2rem;
  width: 40%;
  padding: 0 0 2rem 1rem;

  #image {
    display: none;
  }

  @media screen and (max-width: 45em) {
    width: 80%;
    align-items: center;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #FFFFFF;
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
  background-color: #FFFFFF;
  color: #212121;
  outline: none;
  border: none;
  border-bottom: 1px solid #212121;
  padding: 0.8rem 1rem;
  width: 80%;
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

      .content{
        font-family: 'Poppins', sans-serif;
        position: relative;

        > i{
          margin-left: 0.5rem;
        }

        .warn{
          margin-top: 0.3rem;
          font-size: 0.6rem;
          font-style: italic;
          position: absolute;
          top: 2rem;
        }
      }
    }
    &.for-desktop{
      display: none;
    }
  }
`;
