import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Start extends Component {
    state = {
        counter: 0
    }

    render () {
      return (
        <>
          <div className="back">
            <Link to="/" className="back__link"></Link>
          </div>
          <div className="start">
            <h1 className="start__header">Start Quiz</h1>
            <form>
              <div className="start__new-user">
                <label className="start__text">What is your username</label><br/>
                <input type="text" className="start__input" /><br/>
              </div>
              <div className="start__existing-user">
                <p className="start__text--2">
                  Continue as 
                  <span className="user"> samlak</span>
                </p>
                <p className="start__text--3">OR</p>
                <button className="button">As a new user</button>
              </div>
              <select name="category" class="start__select">
                <option value="any">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals &amp; Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                <option value="32">Entertainment: Cartoon &amp; Animations</option>		
              </select><br/>
              <button type="submit" className="button">Start Quiz</button>
            </form>
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

// export default connect(mapStateToProps, mapDispatchToProps)(Start);
export default Start;