import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'
import { loadDB, selectObject, EverTrueReducer } from '../../state'
import loading from './loading.svg'
import './App.css'
import { Nav } from '../Nav'
import { ObjectDetail } from '../Object'

export let store = createStore(EverTrueReducer, applyMiddleware(thunk))

class App extends Component {
  componentWillMount = () => {
    this.props.loadDB()
    this.props.selectObject(0)
  }
  render() {
    return (
      <div>
        {this.props.db.data === undefined ? (
          <img className="loading" src={loading} alt="loading" />
        ) : (
          <div className="app">
            <Nav onSelect={this.props.selectObject} data={this.props.db.data} selected={this.props.selected} />
            <ObjectDetail data={this.props.db.data[this.props.selected]} />
          </div>
        )}
      </div>
    )
  }
}

export const EverTrueApp = connect(state => ({ db: state.db, ...state.selected }), { loadDB, selectObject })(App)
