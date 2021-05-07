import styled from 'styled-components';

const MenuStyles = styled.div`
  border: 1px solid red;
  transition: all 350ms ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  ul {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
`;
export default function Menu() {
  return (
    <MenuStyles>
      <a
        href="https://jesusrmz.com/"
        target="_blank"
        rel="noopener"
        className="socials--link"
      >
        Portfolio
      </a>
      <ul>
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
    </MenuStyles>
  );
}
