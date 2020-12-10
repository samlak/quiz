import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Leaderboard from '../components/Leaderboard'

class Home extends Component {
    state = {
    }

    render () {
        console.log(this.props.user)
        return (
            <div className="home">
                <h1 className="home__header">RASHGET</h1>
                <p className="home__text">Hello <span className="user"> {this.props.user || "Guest"} </span> </p>
                <Link to="/start">
                    <div className="home__button">
                        <button className="button">Take Quiz</button>
                    </div>
                </Link>
                <Leaderboard data={this.props.leaderboard}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        leaderboard: state.data.leaderboard,
        user: state.data.user
    };
};

export default connect(mapStateToProps)(Home);