import { connect } from 'react-redux';
import HoldButton from '../components/holdButton';
import { togglePlayer } from '../actions';

const mapDispatchToProps = { togglePlayer };
// Don't forget to actually use connect!
// Note that we don't export Polls, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(null, mapDispatchToProps)(HoldButton);
