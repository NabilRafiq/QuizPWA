import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #9da1a1;
  border-radius: 10px;
  border: 2px solid #015580;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.8s ease;

  :hover {
    opacity: 0.7;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #35b06e, #41f292)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff6363, #802020)'
        : 'linear-gradient(90deg, #03abff, #03abff)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: black;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
