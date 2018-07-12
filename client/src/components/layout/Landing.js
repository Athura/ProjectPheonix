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

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

class Landing extends Component {
  render() {
    return (
      <div className="background">
        <Button>Normal Button</Button>
        <Button primary></Button>
      </div>
    )
  }
}


export default Landing;