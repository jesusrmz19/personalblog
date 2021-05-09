import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  .article--head {
    margin: 4.5rem 0;
  }
  h1 {
    text-align: center;
    font-size: 5.5rem;
    line-height: 1;
    width: 80%;
    margin: 0 auto;
    color: var(--realblack);
  }
  .article--date {
    margin-top: 1.5rem;
    line-height: 1;
    text-align: center;
    font-size: 2rem;
  }
  .article--img {
    width: 100%;
    padding: 0 1.8rem;
    height: 400px;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .article--img img {
    width: 100%;
  }
  .article--post {
    max-width: 100%;
    margin: 2.5rem auto;
    line-height: 2;
    padding: 0 1.8rem;
  }
  .article--post h2 {
    margin-top: 1.5rem;
    color: var(--realblack);
  }
  .article--post a {
    color: #f36d33;
    text-decoration: underline;
  }
  .article--post a:hover {
    text-decoration: underline;
  }
  p code {
    background-color: var(--black);
    color: var(--offWhite);
    padding: 0.2em 0.4em;
  }
  .article--return {
    margin-bottom: 1.5rem;

    margin-left: 1.8rem;
    background-color: #f36d33;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 0.8em;
    font-size: 1.4rem;
    transition: transform 300ms ease;
  }
  .article--return:hover {
    transform: translateX(-5px);
  }
  .article--return img {
    width: 1.2rem;
    transform: rotate(180deg);
  }
  .article--return a {
    margin-left: 1.2rem;
  }
  pre {
    background: var(--black);
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: var(--offWhite);
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  }
  @media ${device.mobileL} {
    h1 {
      width: 90%;
    }
    .article--img {
      height: 200px;
    }
  }
`;

export default Article;
