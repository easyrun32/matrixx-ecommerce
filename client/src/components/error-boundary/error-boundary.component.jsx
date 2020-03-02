import React, { Component } from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary.styles";
export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
    //do something with error
    // set the state
    return { hasErrored: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
          <ErrorImageText>The Dog Ate This Page</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}
