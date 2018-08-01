import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import Parallax from "../Parallax/Parallax.jsx";
import GridContainer from "../core/Grid/GridContainer";
import GridItem from "../core/Grid/GridItem";
import Button from "../core/CustomButtons/Button";

import landingPageStyle from "../../assets/jss/phoenix-kit-react/views/_landingPage.jsx";

class LandingPage extends Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <Parallax
        filter
        image={require("../../assets/img/leighann-renee-503319-unsplash.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Ravenous</h1>
              <h4 className={classes.subtitle}>
                Where you learn to food the right way. Because sometimes people
                need a helping hand.
              </h4>
              <Link to="food">
                <Button
                  color="info"
                  size="lg"
                >
                  Get Started
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
