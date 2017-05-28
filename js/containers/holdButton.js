import { connect } from 'react-redux';
import HoldButton from '../components/holdButton';
import { togglePlayer, addScoreToGlobal } from '../actions';

const mapStateToProps = (state) => {
    const { rounds } = state;
    return { rounds };
};
const mapDispatchToProps = { togglePlayer, addScoreToGlobal };
// Don't forget to actually use connect!
// Note that we don't export Polls, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(HoldButton);
