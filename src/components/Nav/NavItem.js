import React, { Component } from 'react'

export class NavItem extends Component {
  render() {
    const { value, selected, onSelect, index } = this.props
    return <div className={`nav-item ${selected ? 'selected' : ''}`} onClick={() => onSelect(index)}>
      <p>{value}</p>
    </div>
  }
}