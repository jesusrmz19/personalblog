import styled from 'styled-components';

const DarkModeStyles = styled.div`
  box-sizing: border-box;
  --btnborder: #0a1d27;
  --night: #194a63;
  --day: #96cae5;
  --moon: #ffefb5;
  --moonborder: #caba94;
  --sun: #ffde7b;
  --sunborder: #debd56;
  width: 50px;
  input {
    display: none;
  }
  .btn-container {
    position: absolute;
    border-radius: 130px;
    width: 50px;
    height: 25px;
    background-color: var(--day);
    -webkit-appearance: none;
    outline: none;
    transition: all ease 0.3s;
    cursor: pointer;
  }
  .btn-container::before {
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    top: 25%;
    left: 15%;
    background-color: #96cae5;
    border-radius: 50%;
    box-shadow: 5px 10px #96cae5, 12px 5px #96cae5;
  }
  .btn-figure {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    background-color: var(--sun);
    border: 4px solid var(--sunborder);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    transition: all ease 0.3s;
    /* background-image: radial-gradient(
        circle at 60% 10%,
        #caba94 15%,
        transparent 0
      ),
      radial-gradient(circle at 30% 50%, #caba94 10%, transparent 0),
      radial-gradient(circle at 60% 70%, #caba94 13%, transparent 0); */
  }
  .btn-figure::after {
    content: '';
    position: absolute;
    right: -100%;
    top: 55%;
    width: 1.5em;
    height: 0.3em;
    border-radius: 2em;
    box-shadow: -0.5em -0.2em white, -1em 0.1em 0 -0.1em white;
    opacity: 1;
    transition: transform 0.2s ease-in-out, background-color 0.3s,
      border-color 0.3s;
    background-color: white;
  }
  input:checked + .btn-container {
    background-color: var(--night);
  }
  input:checked + .btn-container .btn-figure {
    left: 75%;
    background-color: var(--moon);
    border-color: var(--moonborder);
    background-size: 0;
    box-shadow: 0;
  }
  input:checked + .btn-container .btn-figure:after {
    transition: opacity 0.5s;
    opacity: 0;
    transform: translateX(0%);
  }
`;

export default DarkModeStyles;
