import styled from 'styled-components';

const DarkModeStyles = styled.div`
  input {
    display: none;
  }
  .btn-container {
    position: absolute;
    border-radius: 130px;
    width: 50px;
    height: 25px;
    background-color: #194a63;
    -webkit-appearance: none;
    outline: none;
    transition: all ease 0.3s;
    border: 2px solid #0a1d27;
    cursor: pointer;
  }
  .btn-container::before {
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    top: 20%;
    left: 58%;
    background-color: #96cae5;
    border-radius: 50%;
    box-shadow: 5px 10px #96cae5, 12px 5px #96cae5;
  }
  .btn-figure {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    background-color: #ffefb5;
    border: 3px solid #caba94;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    transition: all ease 0.3s;
    background-image: radial-gradient(
        circle at 60% 10%,
        #caba94 15%,
        transparent 0
      ),
      radial-gradient(circle at 30% 50%, #caba94 10%, transparent 0),
      radial-gradient(circle at 60% 70%, #caba94 13%, transparent 0);
  }
  .btn-figure::after {
    content: '';
    position: absolute;
    right: 50%;
    top: 55%;
    width: 1.5em;
    height: 0.3em;
    border-radius: 2em;
    box-shadow: -0.5em -0.2em white, -1em 0.1em 0 -0.1em white;
    opacity: 0;
    transform: translateX(-50%);
    transition: transform 0.2s ease-in-out, background-color 0.3s,
      border-color 0.3s;
    background-color: white;
  }
  input:checked + .btn-container {
    background-color: #96cae5;
    border: 2px solid #78a1b7;
  }
  input:checked + .btn-container .btn-figure {
    left: 75%;
    background-color: #ffde7b;
    border-color: #debd56;
    background-size: 0;
    box-shadow: 0;
  }
  input:checked + .btn-container .btn-figure:after {
    transition: opacity 0.5s;
    opacity: 1;
    transform: translateX(0%);
  }
`;

export default DarkModeStyles;
