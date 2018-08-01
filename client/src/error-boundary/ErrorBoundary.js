import React, { Component } from "react";

// Wrap our potentially buggy components with this component to catch potential errors and handle them properly
// Well maybe not properly at the moment because we're displaying the errors on the screen for the user... Hmmmm

// A better way to do this may be to wrap our top level components (App and our providers) with this component and display an Oops, something went wrong screen.
// Then provide a way for a user to go back which we can do with react router
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        hasError: false, 
        error: null, 
        errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Display our fallback UI
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
    // We can also log the error to an error logger, but since we don't have one we'll just console.log it out
    console.localStorage("Hi, I errored");
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something wen't wrong</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // When things run smoothly we just render the children or what components are wrapped in our wrapper
    return this.props.children;
  }
}

export default ErrorBoundary;
