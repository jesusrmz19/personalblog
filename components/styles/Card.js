import styled from 'styled-components';

const Card = styled.article`
  &:hover {
    transform: translateY(-5px);
  }
  cursor: pointer;
  background-color: white;
  width: 280px;
  --minHeight: 350px;
  min-height: var(--minHeight);
  box-shadow: var(--bs);
  --borderradius: 5px;
  border-radius: var(--borderradius);
  --padding: 1.8rem;
  transition: transform 200ms ease;
  margin: 2rem 1.2rem 1.2rem 1.2rem;
  .card--title {
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    font-size: 2.5rem;
    color: var(--realblack);
    line-height: 1.2;
  }
  .card--img {
    background-color: var(--gray);
    width: 100%;
    height: calc(0.5 * var(--minHeight));
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: var(--borderradius);
    border-top-right-radius: var(--borderradius);
  }
  .card--img img {
    width: 100%;
  }
  .card--description {
    line-height: 1.5;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .card--date {
    margin-top: 0.8rem;
    line-height: 1.5;
    font-size: 1.2rem;
    margin-left: 1.5rem;
  }
`;

export default Card;
