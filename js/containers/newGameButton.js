import { connect } from 'react-redux';
import NewGameButton from '../components/newGameButton';
import { resetPlayers, resetRounds, resetDice } from '../actions';

const mapStateProps = (state) => {
    const { players } = state;
    return { players };
};
const mapDispatchToProps = { resetPlayers, resetRounds, resetDice };
// Don't forget to actually use connect!
// Note that we don't export Polls, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateProps, mapDispatchToProps)(NewGameButton);
