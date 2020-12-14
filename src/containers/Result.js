import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../store/actions/index';

class Result extends Component {
    state = {
        counter: 0
    }

    componentDidMount() {
      if(this.props.user){
        this.props.onSaveToStorage(this.props.leaderboard, this.props.user);
      }
    }

    render () {
      const position = this.props.leaderboard.map((user, index) => {
        if (user.user === this.props.user) {
          return index  + 1;
        }
        return null;
      }).filter(position => position)
      .reduce((initial, position) => position, 0);

      const totalScore = this.props.leaderboard.map((user, index) => {
        if (user.user === this.props.user) {
          return user.score
        }
        return null;
      });

      return (
        <>
          <div className="back">
            <Link to="/start" className="back__link"></Link>
          </div>
          <div className="result">
            <h1 className="result__header">Quiz result</h1>
            <p className="result__text">Your score is {this.props.score}/10</p>
            <p className="result__text">Your total score is {totalScore}</p>
            <p className="result__text">Your are number <span className="bold"> {position} </span> on the leaderboard</p>
            <div className="result__button">
              <Link to="/start"><button  className="button button--result">Take another test</button></Link>
              <Link to="/"><button className="button button--result">Go to leaderboard</button></Link>
            </div>
          </div>
        </>
      )
    }
}

const mapStateToProps = state => {
  return {
    leaderboard: state.data.leaderboard,
    user: state.data.user,
    score: state.data.score,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveToStorage: (leaderboard, user) => dispatch(action.saveToStorage(leaderboard, user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);