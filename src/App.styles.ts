import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/pexels-photo-2387793.jpeg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
    font-family:Arial;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Arial;
    background-image: linear-gradient(180deg, #fff, #41484a);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #474747);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #facd73, #fadca0);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-family:Arial;
    font-size:20px;
  }

  .start{
    max-width: 200px;
    border-radius:3px;
    color:#4a4a4a;
    outline:none;
    transition: 1s;

  }
  .next {
    border-radius:3px;
    color:#4a4a4a;
    outline:none;
    transition: 1s;
  }
  .start:hover,.next:hover {
    box-shadow: 0 5px 20px 2px rgba(252 , 168,0, 1);
    color:black;


  }
  .start:active,.next:active {
    box-shadow: 0 5px 20px 2px rgba(252 , 168,0, 1);
    color:black;

  }
`;
