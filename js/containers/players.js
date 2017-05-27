import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from '../components/player';

const mapStateToProps = (state) => {
    const { players, rounds } = state;
    return { players, rounds };
};

class PlayersContainer extends Component {
    render() {
        const { players } = this.props;
        return ( 
            <div>
                { players.map(({ id, totalScore, currentScore, active }) =>(
                    <Player 
                        key={id}
                        id={id}
                        totalScore={totalScore}
                        currentScore={currentScore}
                        active={active}
                    />
                )
                ) }
            </div>
        );
    }
}
// Don't forget to actually use connect!
// Note that we don't export Polls, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps)(PlayersContainer);
