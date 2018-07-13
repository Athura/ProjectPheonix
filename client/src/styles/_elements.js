import styled, { css } from 'styled-components';

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
  margin-left: -160px;
  margin-top: 300px;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
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
  `}
`

export const Span = styled.span`
  position: absolute;
  left: 25%;
  margin-left: -290px;
  margin-top: 275px;

  ${props => props.primary && css`
    color: pink;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
    font-family: 'Lobster';
  `}
`