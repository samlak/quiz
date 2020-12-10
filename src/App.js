import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Quiz from './containers/Quiz';
import Home from './containers/Home';
import Result from './containers/Result';
import Start from './containers/Start';
import Layout from './components/Layout';
import './App.css';
import { connect } from 'react-redux';
import * as action from './store/actions/index';

class App extends Component {
  componentDidMount () {
    this.props.onGetFromStorage();
  }

  render(){
    return (
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route path="/start" exact component={Start}/>
            <Route path="/quiz" exact component={Quiz}/>
            <Route path="/result" exact component={Result}/>
            <Route path="/"exact component={Home}/>
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    onGetFromStorage: () => dispatch(action.getFromStorage())
  }
}

export default connect(null, mapDispatchToProps)(App);
