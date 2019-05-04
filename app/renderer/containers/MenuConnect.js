import { connect } from 'react-redux';
import Header from '../components/Menu';

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps,
)(Header);
