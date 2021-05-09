import { useState } from 'react';
import styled from 'styled-components';
import { device } from '../lib/breakpoints';
import { Button } from './styles/Button';

const HeaderStyles = styled.header`
  .innerheader {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  .signature--container {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .signature--container img {
    height: 60%;
  }
  .socials {
    display: flex;
  }
  .socials--item {
    list-style-type: none;
    padding: 0.5em 0.8em;
  }
  .portfolio {
    border-right: solid 2px black;
  }
  .socials--link {
    display: inline-block;
    font-size: 2rem;
    position: relative;
  }
  .socials--link::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: black;
    transition: width ease 300ms;
  }
  .socials--link:hover::after {
    width: 100%;
  }
  .socials--link img {
    transform: translateY(2px);
    width: 2rem;
  }
  .header--btn {
    display: none;
  }
  .menu {
    display: block;
    width: 100%;
    height: auto;
    transition: all 300ms ease;
  }
  .menu.active:first-child {
    border: solid 1px red;
    height: 195px;
    opacity: 1;
    visibility: visible;
  }
  @media ${device.mobileL} {
    .innerheader {
      flex-wrap: wrap;
    }
    nav {
      visibility: hidden;
      height: 0;
      position: relative;
      width: 100%;
      transition: height ease 200ms;
    }
    nav.active {
      visibility: visible;
      height: auto;
      position: relative;
    }
    .socials {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .portfolio {
      border: none;
    }
  }
`;

export default function Header() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <HeaderStyles>
      <div className="innerheader">
        <div className="signature--container">
          <img src="/signature_no_bg.png" alt="Signature Logo"></img>
        </div>
        <Button
          onClick={toggleClass}
          className={isActive ? 'active' : 'null'}
        ></Button>
        <nav className={isActive ? 'active' : 'null'}>
          <ul className="socials">
            <li className="socials--item portfolio">
              <a
                href="https://jesusrmz.com/"
                target="_blank"
                rel="noopener"
                className="socials--link"
              >
                Portfolio
              </a>
            </li>
            <li className="socials--item">
              <a
                href="https://www.instagram.com/jesusrmz_/"
                target="_blank"
                rel="noopener"
                className="socials--link"
              >
                <img src="/ig.png"></img>
              </a>
            </li>
            <li className="socials--item">
              <a
                href="https://twitter.com/jesusrmz_"
                target="_blank"
                rel="noopener"
                className="socials--link"
              >
                <img src="/twitter.png"></img>
              </a>
            </li>
            <li className="socials--item">
              <a
                href="https://www.linkedin.com/in/jesusrmz/"
                target="_blank"
                rel="noopener"
                className="socials--link"
              >
                <img src="/linkedin.png"></img>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyles>
  );
}
