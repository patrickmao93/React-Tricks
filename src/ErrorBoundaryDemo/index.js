import React from "react";

class ErroBoundary extends React.Component {
  state = {
    hasError: false,
    error: "",
  };

  componentDidCatch(error, errorInfo) {
    console.log("<ErrorBoundary /> caught an error!", error, errorInfo);
    this.setState(() => ({ hasError: true, error }));
  }

  resetErrorState = () => {
    this.setState(() => ({ hasError: false, error: "" }));
  };

  render() {
    const { hasError, error } = this.state;
    const { children, renderErrorState } = this.props;
    if (hasError) {
      return <div>{renderErrorState(error, this.resetErrorState)}</div>;
    }
    return children;
  }
}

export default ErroBoundary;
