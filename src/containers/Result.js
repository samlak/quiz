import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Result extends Component {
    state = {
        counter: 0
    }

    render () {
      return (
        <>
          <div className="back">
            <Link to="/start" className="back__link"></Link>
          </div>
          <div className="result">
            <h1 className="result__header">Quiz result</h1>
            <p className="result__text">Your score is 9/10</p>
            <p className="result__text">Your total score is 940</p>
            <p className="result__text">Your are number <span className="bold"> 2 </span> on the leaderboard</p>
            <div className="result__button">
              <Link to="/start"><button  className="button button--result">Take another test</button></Link>
              <Link to="/"><button className="button button--result">Go to leaderboard</button></Link>
            </div>
          </div>
        </>
      )
    }
}

// const mapStateToProps = state => {
//     return {};
// };

// const mapDispatchToProps = dispatch => {
//     return {};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Result);
export default Result;