import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import './Landing.css';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  cursor: pointer;

  position: absolute;
  left: 50%;
  margin-left: -100px;
  margin-top: 550px;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Header = styled.header`
  position: absolute;
  left: 50%;
  margin-left: -135px;
  margin-top: 500px;

  ${props => props.primary && css`
    text-transform: uppercase;
    color: white;
    font-size: 30px;
    margin-bottom: 40px;
  `}
`

class Landing extends Component {
  render() {
    return (
      <div className="background">
          <div className="container">
              <Header primary className="landing_header">Bingo Bongo I'm a header</Header>
              <Button>Props created button</Button>
          </div>
      </div>
    )
  }
}


export default Landing;