import styled, { css } from 'styled-components';
import typography from './_typography';
import { moveInBottom, moveInLeft, moveInRight } from './_animation';

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.70em 1.5em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  cursor: pointer;
  position: absolute;
  left: 25%;
  margin-left: -170px;
  margin-top: 325px;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
    animation: ${moveInBottom} 2s;
  `}
`;

export const Header = styled.header`
  position: absolute;
  left: 25%;
  margin-left: -370px;
  margin-top: 200px;
  ${props => props.primary && css`
    text-transform: uppercase;
    color: white;
    font-size: 100px;
    margin-bottom: 40px;
    animation: ${moveInLeft} 2s;
  `}
`

export const Span = styled.span`
  position: absolute;
  left: 25%;
  margin-left: -310px;
  margin-top: 275px;
  ${props => props.primary && css`
    color: pink;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
    font-family: ${typography.main};
    animation: ${moveInRight} 2s;
  `}
`