import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../store/actions/index';
import axios from 'axios';

class Quiz extends Component {
    state = {
      questions: [],
      activeQuestion: 0,
      score: 0,
      status: '',
      selectedOption: '',
      correctOption: '',
      processing: false
    }

    componentDidMount() {
      let url = `https://opentdb.com/api.php?amount=10&type=multiple`;
      if(this.props.category){
        url = `https://opentdb.com/api.php?amount=10&category=${this.props.category}&type=multiple`;
      }
      axios.get(url).then(response => {
        console.log(response.data.results);
        const questions = response.data.results.map(question => {
          const newOption = [
            ...question.incorrect_answers,
            question.correct_answer
          ]; 
          const shuffledOption = newOption.sort(() => Math.random() - 0.5);
          return {
            question: question.question,
            option: shuffledOption,
            answer: question.correct_answer
          }
        });
  
        this.setState({
          questions
        });
      })
      
    }

    validateOption = (option) => {
      if(!this.state.processing){
        this.setState({
          processing: true,
          selectedOption: option,
          correctOption: this.state.questions[this.state.activeQuestion].answer
        });

        if (this.state.questions[this.state.activeQuestion].answer === option) {
          this.setState((prevState) => {
            return {
              score: Number(prevState.score) + 1,
              status: 'correct'
            }
          })
        } else {
          this.setState({
            status: 'wrong'
          });
        }

        setTimeout(() => {
          this.setState((prevState) => {
            if(prevState.activeQuestion >= 9){
              this.saveQuiz();
            }
            return {
              activeQuestion: Number(prevState.activeQuestion) + 1,
              status: '',
              correctOption: '',
              selectedOption: '',
              processing: false
            }
          });
        }, 1300)
      }
    };

    saveQuiz = () => {
      console.log(this.props.leaderboard);
      const initialData = this.props.leaderboard.find((user => user.user === this.props.user));
      let newScore = Number(this.state.score);
      if(initialData) {
        newScore = Number(this.state.score) + Number(initialData.score);
      }
      
      this.props.onScoreUpdate(this.state.score);
      this.props.onAddToLeaderboard(this.props.user, newScore);
      this.props.history.push("/result");
    }

    render () {
      const { questions, activeQuestion, status, selectedOption, correctOption } = this.state;
      const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      }

      return (
        <>
          <div className="back">
            <Link to="/start" className="back__link"></Link>
          </div>
          {questions.length > 0 ?  (
            questions.map((question, index) => (
              (index === activeQuestion) ?
              <div className="quiz" key={index}>
                <div className="quiz__head">
                  <h1 className="quiz__head__heading">Question #{Number(index) + 1}</h1>
                  <div className="quiz__head__number">{Number(index) + 1}/10</div>
                </div>
                <p className="quiz__question">{decodeHtml(question.question)}</p>
                {question.option.map(option => {
                  let quizClass = "quiz__option";
                  let answerMark = null;
                  if(option === correctOption){
                    quizClass = "quiz__option quiz__option__correct";
                    answerMark = <div className="quiz__option__correct__sign"></div>
                  }
                  if(option === selectedOption && status === "wrong") {
                    quizClass = "quiz__option quiz__option__wrong";
                    answerMark = <div className="quiz__option__wrong__sign"></div>
                  }
                  return (
                    <div className={quizClass} onClick={() => this.validateOption(option)}>
                      <p>{decodeHtml(option)}</p>
                      {answerMark}
                    </div>
                  )
                })}
              </div>
              : null 
              ))
          ) : (
            <div className="quiz-loader">
              <div class="loader"><div></div><div></div><div></div><div></div></div>
            </div>
          )}
        </>
      )
    }
}

const mapStateToProps = state => {
  return {
    questions: state.data.questions,
    user: state.data.user,
    leaderboard: state.data.leaderboard,
    category: state.data.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToLeaderboard: (user, score) => dispatch(action.addToLeaderboard(user, score)),
    onScoreUpdate: (score) => dispatch(action.updateScore(score))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);