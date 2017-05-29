import { connect } from 'react-redux';
import Players from '../components/players';
import { winnerPlayer } from '../actions';

const mapStateToProps = (state) => {
    const { players, rounds } = state;
    return { players, rounds };
};
const mapDispatchToProps = { winnerPlayer };
// Don't forget to actually use connect!
// Note that we don't export Polls, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(Players);
