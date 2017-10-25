import React, { Component } from 'react'
import { getDisplayName } from '../../state'
import './Object.css'

export class ObjectDetail extends Component {
  state = {}

  getUsage = () => {
    let array = this.props.data.usage.map(item => getDisplayName(item))
    return array.length > 0 ? array.join(' | ') : 'None'
  }

  render() {
    const { type, displayName, everTrueFieldName } = this.props.data
    return (
      <div className="content">
        <h1>{displayName}</h1>
        <div className="info">
          <div className="info-labels">
            <div>Type</div>
            <div>Name</div>
            <div>Usage</div>
          </div>
          <div className="info-values">
            <div>{getDisplayName(type)}</div>
            <div style={{ color: '#A65D89', borderColor: '#72858B' }}>{everTrueFieldName}</div>
            <div>{this.getUsage()}</div>
          </div>
        </div>
      </div>
    )
  }
}
