import React from "react";

export default function WithLogging(WrappedComponent) {
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name || 'Component'} is mounted`)
    }
    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name || 'Component'} is going to unmount`)
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  WithLogging.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`
  return WithLogging
}
