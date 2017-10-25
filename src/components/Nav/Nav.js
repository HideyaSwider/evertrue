import React, { Component } from 'react'
import { NavItem } from './NavItem'
import './Nav.css'

export class Nav extends Component {
  render() {
    const { data, selected, onSelect } = this.props
    return <div className="nav">
      {data.map((item, i) => {
        return <NavItem key={i} index={i} selected={i === selected} value={item.displayName} onSelect={onSelect}/>
      })}
    </div>
  }
}