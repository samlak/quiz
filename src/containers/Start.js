import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../store/actions/index';

class Start extends Component {
    state = {
      user: null,
      newUser: true,
      catgeory: '',
      message: ''
    }

    componentDidMount() {
      if(this.props.user){
        this.setState({
          newUser: false
        })
      }
    }

    newUser = (event)  => {
      event.preventDefault();
      this.setState({
        newUser: true
      })
    }

    updateOption = (event, option) => {
      const value = event.target.value;
      this.setState({
        message: '',
        [option]: value
      })
    }

    startQuiz = (event) => {
      event.preventDefault();
      const userIsValid = (user) => {
        return /^[a-zA-Z0-9]+$/.test(user.trim());
      }

      if(this.state.newUser && !this.state.user) {
        this.setState({
          message: "Username can not be empty"
        })
      } else if (this.state.newUser && !userIsValid(this.state.user)) {
        this.setState({
          message: "Only numbers and letters are allowed"
        })
      } else {
        if (this.state.user) {
          this.props.onCreateUser(this.state.user);
        }
        this.props.history.push("/quiz");
        return this.props.onAddCategory(this.state.catgeory);
      }
    }

    render () {
      return (
        <>
          <div className="back">
            <Link to="/" className="back__link"></Link>
          </div>
          <div className="start">
            <h1 className="start__header">Start Quiz</h1>
            <form onSubmit={this.startQuiz}>
              {this.state.newUser ? (
                <div className="start__new-user">
                  <label className="start__text">What is your username</label><br/>
                  <input type="text" className="start__input" 
                    onChange={(event) => this.updateOption(event, "user")}/><br/>
                  <p className="start__error">{this.state.message}</p>
                </div>
              ) : (
                <div className="start__existing-user">
                  <p className="start__text--2">
                    Continue as 
                    <span className="user"> {this.props.user}</span>
                  </p>
                  <p className="start__text--3">OR</p>
                  <button className="button" onClick={this.newUser}>New user</button>
                </div>
              )}
              <select name="category" class="start__select" 
                onChange={(event) => this.updateOption(event, "catgeory")}
              >
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

const mapStateToProps = state => {
  return {
    user: state.data.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: (user) => dispatch(action.createUser(user)),
    onAddCategory: (category) => dispatch(action.addCategory(category))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);