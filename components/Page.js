import Header from './Header';
import Footer from './Footer';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Sarabun-Bold';
        src: url('/fonts/Sarabun-Bold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
      font-family: 'Sarabun-Light' ;
      src: url('/fonts/Sarabun-Light.tff') format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }
    html {
        --red: #ff0000;
        --realblack: #000;
        --black: #393939;
        --grey: #3a3a3a;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --bg: #f2f2f2;
        --maxwidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.25);
        --boldfont: 'Sarabun-Bold';
        --lightfont: 'Sarabun-Light';
        box-sizing: border-box;
        font-size: 62.5%;
        font-family: 'Sarabun-Bold';
    }
    *, *:before, *:after {box-sizing: inherit;}
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        background-color: var(--offWhite);
        color: var(--black);
        position: relative;
        min-height: 100vh;
    }
    h1, h2, h3, p, ul, li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    h1,h2,h3 {
      font-family: var(--boldfont), 'Helvetica Neue', sans-serif;
    }
    p {
      font-family: var(--lightfont), 'Helvetica Neue', sans-serif;
    }
    a {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
`;

const InnerPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header></Header>
      <InnerPage>{children}</InnerPage>
      <Footer></Footer>
    </>
  );
}
