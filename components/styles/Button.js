import styled from 'styled-components';
import { device } from '../../lib/breakpoints';

export const Button = styled.button`
  display: none;
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: var(--black);
  outline: none;
  border: none;
  transition: all ease 200ms;
  &::before,
  &::after {
    content: '';
    background-color: white;
    width: 25px;
    height: 2px;
    position: absolute;
    left: 50%;
    transition: all ease 200ms;
    transform: translate(-50%, -50%);
  }
  &::before {
    top: 40%;
  }
  &::after {
    top: 60%;
  }
  &.active::before {
    top: 50%;
    left: 25%;
    transform: rotate(45deg);
  }
  &.active::after {
    top: 50%;
    left: 25%;
    transform: rotate(-45deg);
  }
  @media ${device.mobileL} {
    display: block;
  }
`;
