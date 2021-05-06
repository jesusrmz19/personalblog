import styled from 'styled-components';

const FooterStyles = styled.footer`
  border: 1px red solid;
  width: 100%;
  max-width: 1200px;
  p {
    color: red;
  }
`;

export default function Header() {
  return (
    <FooterStyles>
      <p>this is a footer</p>
    </FooterStyles>
  );
}
