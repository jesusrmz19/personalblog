import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  p {
    color: var(--offWhite);
    padding: 1.5rem;
  }
`;

export default function Header() {
  return (
    <FooterStyles>
      <p>Jesús Ramírez © 2021</p>
    </FooterStyles>
  );
}
