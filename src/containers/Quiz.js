import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Quiz extends Component {
    state = {
        counter: 0
    }

    render () {
      return (
        <>
          <div className="back">
            <Link to="/start" className="back__link"></Link>
          </div>
          <div className="quiz">
            <div className="quiz__head">
              <h1 className="quiz__head__heading">Question #1</h1>
              <div className="quiz__head__number">1/10</div>
            </div>
            <p className="quiz__question">Peace has a huge passion for growing people and businesses. With her years of experience as a digital marketing expert, she has trained thousands people and grew a number of businesses.</p>
            <div className="quiz__option">
              <p>Huge passion for it</p>
              <div className="quiz__option__correct__sign"></div>
            </div>
            <div className="quiz__option quiz__option__correct">
              <p>Huge passion for it</p>
              <div className="quiz__option__correct__sign"></div>
            </div>
            <div className="quiz__option quiz__option__wrong">
              <p>Huge passion for it</p>
              <div className="quiz__option__wrong__sign"></div>
            </div>
            <div className="quiz__option">
              <p>Huge passion for it</p>
              <div className="quiz__option__correct__sign"></div>
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

// export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
export default Quiz;