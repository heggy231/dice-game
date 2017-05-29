import React, { Component } from 'react';
import { connect } from 'react-redux';
import DiceGame from '../components/diceGame';
import { togglePlayer, updateScore } from '../actions';


class DiceGameContainer extends Component {

    componentWillReceiveProps(nextProps) {
        const { dice, rounds, togglePlayer, updateScore } = nextProps; //eslint-disable-line
        if (this.props.rounds.player === rounds.player) {
            if (dice.number === 1) {
                updateScore(rounds.player, 1);
                togglePlayer();
            } else if (nextProps.rounds.winner == null &&
                 this.props.rounds.winner === nextProps.rounds.winner
              ) {
                updateScore(rounds.player, dice.number);
            }
        }
    }

    render() {
        return <DiceGame {...this.props} />;
    }
}
// Don't forget to actually use connect!
// Note that we don't export Polls, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
const mapStateToProps = (state) => {
    const { rounds, dice } = state;
    return { rounds, dice };
};
const mapDistapchToProps = { togglePlayer, updateScore };
export default connect(mapStateToProps, mapDistapchToProps)(DiceGameContainer);
