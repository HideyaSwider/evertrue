import React, { Component } from 'react'
import './Object.css'

export class ObjectDetail extends Component {
  render() {
    const { displayName, type, usage, everTrueFieldName } = this.props.data
    return (
      <div className="content">
        <h1>{this.props.data.displayName}</h1>
        <div className="info">{type} {everTrueFieldName}</div>
      </div>
    )
  }
}
