import styled from 'styled-components';

const GoBack = styled.button`
  margin-bottom: 2rem;
  margin-left: 1.8rem;
  background-color: #f36d33;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0.8em;
  font-size: 1.4rem;
  transition: transform 300ms ease;

  &:hover {
    transform: translateX(-5px);
  }
  img {
    width: 1.2rem;
    transform: rotate(180deg);
  }
  a {
    margin-left: 1.2rem;
  }
`;

export default GoBack;
