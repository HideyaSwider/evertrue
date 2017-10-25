import React, { Component } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import thunk from 'redux-thunk';
import { loadDB, EverTrueReducer } from '../state'
import loading from './loading.svg'

export let store = createStore(EverTrueReducer, applyMiddleware(thunk))

class App extends Component {
  componentWillMount = () => {
    this.props.loadDB()
  }
  render() {
    return (
      <div className="app">
       {this.props.db.props === undefined ? <img className="loading" src={loading} alt="loading" /> : <p>{JSON.stringify(this.props.db)}</p>}
      </div>
    );
  }
}

export const EverTrueApp = connect(state => ({db: state.db}), {loadDB })(App)


