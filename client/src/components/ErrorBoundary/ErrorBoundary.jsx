import React from 'react';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './ErrorBoundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErred: false
    }
  }
  static getDerivedStateFromError(error) {
    // process the error
    return {
      hasErred: true
    };
  }

  componentDidCatch(error, info) {
    console.log('The error:', error)
  }

  render() {
    if (this.state.hasErred) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
          <ErrorImageText>
            <h3>404!</h3>
            <p>Sorry, but this page is broken and we're out for beers.</p>
          </ErrorImageText>
        </ErrorImageOverlay>
      )
    };

    return this.props.children;
  }
};

export default ErrorBoundary;