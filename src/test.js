import React from 'react'

class Test extends React.Component {
  render() {
    console.log(this.props)
    return (
        <h1>test Component '{this.props.match.params.location}'</h1>
    )
  }
}

export default Test