import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Span } from '../../styles/_elements';
import './Landing.css';


class Landing extends Component {
  render() {
    return (
      <div className="background">
          <div className="container">
              <Header primary className="landing_header">Ravenous</Header>
              <Span primary>Rise up and claim your right to food.</Span>
              <Button>Get Started</Button>
          </div>
      </div>
    )
  }
}


export default Landing;