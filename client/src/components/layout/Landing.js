import React from 'react';
import { Button, Header, Span } from '../../styles/_elements';
import './Landing.css';


const Landing = ({ history }) => {
    return (
      <div className="background">
          <div className="container">
              <Header primary>Ravenous</Header>
              <Span primary>Rise up and claim your right to food.</Span>
              <Button primary
                onClick={() => history.push("/food")}
              >Get Started</Button>
          </div>
      </div>
    )
  }



export default Landing;