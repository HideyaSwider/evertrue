import React, { Component } from 'react'

export class ObjectDetail extends Component {
  render() {
  	return <div style={{width: 200, height: 200, backgroundColor: 'blue'}}>{this.props.data.displayName}</div>
  }
}