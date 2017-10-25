import React, { Component } from 'react'
const color  = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export class Nav extends Component {
  render() {
  	return <div onClick={() => this.props.onSelect(Math.round(Math.random() * 15) + 1)} style={{width: 200, height: 200, backgroundColor: color()}}>nav</div>
  }
}