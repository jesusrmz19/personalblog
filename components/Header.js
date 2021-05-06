import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const HeaderStyles = styled.header`
  .innerheader {
    max-width: 1200px;
    margin: 0 auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="innerheader">
        <div className="signature--container">
          <img src="/signature_no_bg.png" alt="Signature Logo"></img>
        </div>
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
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="socials--item">
            <a
              href="https://twitter.com/jesusrmz_"
              target="_blank"
              rel="noopener"
              className="socials--link"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="socials--item">
            <a
              href="https://www.linkedin.com/in/jesusrmz/"
              target="_blank"
              rel="noopener"
              className="socials--link"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
    </HeaderStyles>
  );
}
