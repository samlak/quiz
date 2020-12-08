import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Leaderboard from '../components/Leaderboard'

class Home extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div className="home">
                <h1 className="home__header">RASHGET</h1>
                <p className="home__text">Hello Guest</p>
                <Link to="/start">
                    <div className="home__button">
                        <button className="button">Take Quiz</button>
                    </div>
                </Link>
                <Leaderboard />
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {};
// };

// const mapDispatchToProps = dispatch => {
//     return {};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;